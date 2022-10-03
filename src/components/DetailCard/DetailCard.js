import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function DetailCard({ cards, onBookmark }) {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(true);

  function toggleDetails() {
    setShowDetails((prev) => !prev);
  }
  console.log('Karte:', id, cards);
  return cards
    .filter((card) => card.id === id)
    .map((card, index) => (
      <StyledCard key={index}>
        <FavButton
          onClick={() => {
            onBookmark(id);
          }}
          style={{ backgroundColor: `${card.bookmarked ? 'green' : 'white'}` }}
        >
          B
        </FavButton>
        <img src={card.image} alt={card.name} />
        <h2>{card.name}</h2>
        {showDetails && (
          <table width="100%">
            <tbody>
              <tr>
                <td>Status:</td>
                <td>{card.status}</td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>{card.gender}</td>
              </tr>
              <tr>
                <td>Species:</td>
                <td>{card.species}</td>
              </tr>
              <tr>
                <td>Date of Birth:</td>
                <td>{card.created}</td>
              </tr>
              <tr>
                <td>Origin:</td>
                <td>{card.origin.name}</td>
              </tr>
              <tr>
                <td>Location:</td>
                <td>{card.location.name}</td>
              </tr>
            </tbody>
          </table>
        )}
        <button onClick={toggleDetails}>{showDetails ? 'Show less' : 'Show more'}</button>
      </StyledCard>
    ));
}
const FavButton = styled.button`
  all: unset;
  position: absolute;
  top: -40px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid red;
  background-color: white;
  cursor: pointer;
`;
const StyledCard = styled.section`
  position: relative;
  background-color: #fffdd0;
  margin: 40px auto;
  list-style: none;
  width: 400px;
  border: 2px solid black;
  border-radius: 0.2em;
  text-align: center;

  & img {
    width: 100%;
  }
  & p {
    text-align: center;
  }
  & button {
    display: block;
    margin: 20px auto;
    font-size: 1.3em;
  }
`;
