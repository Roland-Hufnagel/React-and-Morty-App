import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <StyledFooter>
      <MyLink to="/" end>Home</MyLink>
      <MyLink to="/favorites">Favorites</MyLink>
      <MyLink to="/random">Random</MyLink>
      <MyLink to="/creative">Get Creative</MyLink>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  //position: absolute;
  //bottom: 0;
  width: 100%;
  background-color: pink;
  display: flex;
  justify-content: center;
`;
const MyLink = styled(NavLink)`
all: unset;
cursor: pointer;
padding: 20px;
&.active{
  background-color: white;
}
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
