import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <h1>React Rick and Morty App</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  text-align: center;
  background-color: pink;
`;
