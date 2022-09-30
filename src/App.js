import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <>
      <Header>React Rick & Morty App</Header>
      <Cardlist>
        <Card>
          <img width="200px" src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Morty" />

          <p>Morty Smith</p>
          <button>Show More</button>
        </Card>
      </Cardlist>
      <Navbar>
        <Bulletpoint />
        <Bulletpoint />
        <Bulletpoint />
        <Bulletpoint />
      </Navbar>
    </>
  );
}
const Cardlist = styled.ul`

all: unset;
margin: 0 auto;
`;
const Bulletpoint = styled.div`
  display: inline-block;
  margin: 10px;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: black;
`;
const Navbar = styled.footer`
  width: 100%;
  background-color: pink;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
`;
const Card = styled.li`
  margin: 0 auto;
  margin: 10px;
  list-style: none;
  width: 200px;
  height: 300px;
  border: 2px solid black;
  border-radius: 0.2em;
`;
const Header = styled.h1`
  text-align: center;
  background-color: pink;
`;

export default App;
