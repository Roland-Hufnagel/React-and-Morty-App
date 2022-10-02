import './App.css';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import CardContainer from './components/CardContainer/CardContainer';
import { useEffect, useState } from 'react';

function App() {
  const API = 'https://rickandmortyapi.com/api/character';
  const [cards, setCards] = useState([]);

  async function fetchCharacters() {
    try {
      const response = await fetch(API);
      const result = await response.json();
      setCards(result.results);
      //console.log(cards);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <AppContainer>
      <Header />
      <CardContainer cards={cards} />
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
