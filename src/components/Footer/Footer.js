import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <StyledFooter>
      <StyledNav>
        <NavLink to="/random">Random</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/creative">Get Creative</NavLink>
        <NavLink to="/">Home</NavLink>
        <Bulletpoint />
        <Bulletpoint />
        <Bulletpoint />
        <Bulletpoint />
      </StyledNav>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  /* position: fixed;
  bottom: 0; */
  width: 100%;
  background-color: pink;
  display: flex;
  justify-content: center;
`;

const StyledNav = styled.nav``;

const Bulletpoint = styled.div`
  display: inline-block;
  margin: 10px;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: black;
`;
