import styled from "styled-components";

export default function Card() {
  return (
    <StyledCard>
      <img width="200px" src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Morty" />

      <p>Morty Smith</p>
      <button>Show More</button>
    </StyledCard>
  );
}
const StyledCard = styled.li`
  margin: 0 auto;
  margin: 10px;
  list-style: none;
  width: 200px;
  height: 300px;
  border: 2px solid black;
  border-radius: 0.2em;
`;