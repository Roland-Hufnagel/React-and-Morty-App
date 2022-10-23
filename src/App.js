import './App.css';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Card from './components/Card/Card';
import CardContainer from './components/CardContainer/CardContainer';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DetailCard from './components/DetailCard/DetailCard';
import { useLocalStorage } from './components/hooks.js';

function App() {
  const API = 'https://rickandmortyapi.com/api/character';
  const [cards, setCards] = useState([]);
  const [favorites, setFavorites] = useLocalStorage([], 'favorites');

  async function fetchCharacters() {
    try {
      const response = await fetch(API);
      const result = await response.json();
      const newArrayWithBookmark = result.results.map((data) => {
        // change id to String and add bookmarked-status
        return { ...data, id: data.id.toString(), bookmarked: favorites.includes(data.id.toString()) ? true : false };
      });
      setCards(newArrayWithBookmark);
    } catch (error) {
      console.error(error.message);
    }
  }
  //fetch characters once
  useEffect(() => {
    fetchCharacters();
  }, []);

  function addFavorite(id) {
    setFavorites([...favorites, id]);
  }

  function removeFavorite(id) {
    const index = favorites.indexOf(id);
    const newArray = favorites.map((fav) => fav);
    newArray.splice(index, 1); //Achtung: splice liefert als Returnwert das gelöschte Element (als Array) zurück!!!
    setFavorites(newArray);
  }

  function toggleBookmark(id) {
    favorites.includes(id) ? removeFavorite(id) : addFavorite(id); //add or remove from favorites
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
      {/* <Main> */}
        <Routes>
          <Route path="/" element={<CardContainer cards={cards} site="home" />} />
          {/* <Route path="/" element={<div>{cards.map((card)=>{
            return <Card key={card.id} card={card}/>
          })}</div>}   /> */}
          {/* <Route path="/details/:id" element={<DetailCard cards={cards} onBookmark={toggleBookmark} />} /> */}
          <Route path="/details/:id" element={<CardContainer cards={cards} onBookmark={toggleBookmark} />} />
          <Route path="/random" element={<CardContainer cards={cards} />} />
          <Route path="/favourites" element={<CardContainer cards={cards} />} />
        </Routes>
      {/* </Main> */}
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
