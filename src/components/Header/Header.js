import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <h1>React Rick and Morty App</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  /* position: fixed;
  top: 0; */
  width: 100%;

  text-align: center;
  background-color: red;
`;
