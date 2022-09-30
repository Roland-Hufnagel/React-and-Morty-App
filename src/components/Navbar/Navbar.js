import styled from 'styled-components';

export default function Navbar() {
  return (
    <StyledNavbar>
      <Bulletpoint />
      <Bulletpoint />
      <Bulletpoint />
      <Bulletpoint />
    </StyledNavbar>
  );
}

const Bulletpoint = styled.div`
  display: inline-block;
  margin: 10px;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: black;
`;
const StyledNavbar = styled.nav`
  width: 100%;
  background-color: pink;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
`;
