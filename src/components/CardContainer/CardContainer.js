import Card from '../Card/Card';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

export default function CardContainer({cards}) {
 
  return (
    <StyledCardContainer>
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </StyledCardContainer>
  );
}

const StyledCardContainer = styled.ul`
  all: unset;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  overflow: auto;
  width: 100%;
`;
