import './App.css';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import CardContainer from './components/CardContainer/CardContainer';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DetailCard from './components/DetailCard/DetailCard';
import { useLocalStorage } from './components/hooks.js';

function App() {
  const API = 'https://rickandmortyapi.com/api/character';
  const [cards, setCards] = useState([]);
  const [favorites, setFavorites] = useLocalStorage([], 'favorites');
  //const [favorites, setFavorites] = useState(JSON.stringify(localStorage.getItem('favorites')) && []);
  async function fetchCharacters() {
    try {
      const response = await fetch(API);
      const result = await response.json();
      const newArrayWithBookmark = result.results.map((data) => {
        return { ...data, id: data.id.toString(), bookmarked: favorites.includes(data.id) ? true : false };
      });
      setCards(newArrayWithBookmark);
      console.log(newArrayWithBookmark);
    } catch (error) {
      console.error(error.message);
    }
  }
  // useEffect(() => {
  //   localStorage.setItem('favorites', JSON.stringify(favorites));
  // }, [favorites]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  // useEffect(() => {
  //   const newArray = cards.filter((card) => {
  //     return card.bookmarked;
  //   });
  //   setFavorites(newArray);
  // }, [cards]);

  function removeFavorite(id) {
    const index = favorites.indexOf(id);
    const newArray = favorites.map(fav=>fav);
    newArray.splice(index, 1);  //Achtung: splice liefert als Returnwert das gelöschte Element zurück!!!
    setFavorites(newArray);
  }
  function addFavorite(id) {
    setFavorites([...favorites, id]);
  }

  function toggleBookmark(id) {
    console.log('toggle', id, typeof favorites);
    favorites.includes(id) ? removeFavorite(id) : addFavorite(id);
    setCards(
      cards.map((card) => {
        if (card.id === id) {
          return { ...card, bookmarked: !card.bookmarked };
        } else {
          return { ...card };
        }
      })
    );
  }

  return (
    <AppContainer>
      <Header />
      {/* <CardContainer cards={cards} /> */}
      <Routes>
        <Route path="/" element={<CardContainer cards={cards} />} />
        <Route path="/details/:id" element={<DetailCard cards={cards} onBookmark={toggleBookmark} />} />

        <Route path="/random" element={<CardContainer cards={cards} />} />
        <Route path="/favourites" element={<CardContainer cards={cards} />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  height: 100vh;
  position: relative;
`;
export default App;
