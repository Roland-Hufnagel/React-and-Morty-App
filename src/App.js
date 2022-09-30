import './App.css';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Header />
      <Cardlist>
        <Card />
      </Cardlist>
      <Navbar />
        
    </>
  );
}

const Cardlist = styled.ul`
margin-left: 200px;
all: unset;
margin: 0 auto;
`;



export default App;
