import styled from "styled-components";

export default function Card({name, id, img}) {
  return (
    <StyledCard>
      <img  src={img} alt={name} />

      <p>{name}</p>
      <button>Show More</button>
    </StyledCard>
  );
}
const StyledCard = styled.li`
  margin: 10px auto;
  list-style: none;
  width: 200px;
  height: 300px;
  border: 2px solid black;
  border-radius: 0.2em;

  & img{
    width: 100%;
  }
  & p{
    text-align: center;
  }
  & button{
    display: block;
    margin: 20px auto;
  }
`;