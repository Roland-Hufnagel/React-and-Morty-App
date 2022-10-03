import styled from 'styled-components';

export default function Footer() {
  return (
    <StyledFooter>
      <StyledNav>
        <Bulletpoint />
        <Bulletpoint />
        <Bulletpoint />
        <Bulletpoint />
      </StyledNav>
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
