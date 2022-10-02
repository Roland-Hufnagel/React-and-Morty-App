import './App.css';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import CardContainer from './components/CardContainer/CardContainer';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DetailCard from './components/DetailCard/DetailCard';

function App() {
  const API = 'https://rickandmortyapi.com/api/character';
  const [cards, setCards] = useState([]);

  async function fetchCharacters() {
    try {
      const response = await fetch(API);
      const result = await response.json();
      const newArrayWithBookmark = result.results.map((data) => {
        return { ...data, id: data.id.toString(), bookmarked: false };
      });
      setCards(newArrayWithBookmark);
      console.log(cards);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  function toggleBookmark(id) {
    console.log('toggle', id);
    setCards(
      cards.map((card) => {
        return card.id === id ? { ...card, bookmarked: !card.bookmarked } : { ...card };
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
