import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Card({ card }) {
  return (
    <StyledCard>
      <img src={card.image} alt={card.name} />
      <p>{card.name}</p>
     <StyledLink to={`/details/${card.id}`} >Show More</StyledLink>
    </StyledCard>
  );
}
const StyledCard = styled.li`
background-color: #fffdd0;
  margin: 10px auto;
  list-style: none;
  width: 250px;
  height: 350px;
  border: 2px solid black;
  border-radius: 0.2em;

  & img {
    width: 100%;
  }
  & p {
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  border: 1px solid black;
  border-radius: 0.2em;
  padding: 0.2em;
  color: black;
  display: block;
  width: 70%;

  text-align: center;
  margin: 10px auto;
  `;