import './App.css';
import { styled } from '.';

function App() {
  return (
    <>
      <Header>React Rick & Morty App</Header>
    </>
  );
}

const Header = styled.h1`
  height: 40px;
  background-color: pink;
`;

export default App;
