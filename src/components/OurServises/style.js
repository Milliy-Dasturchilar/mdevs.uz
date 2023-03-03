import styled from "styled-components";

const Container = styled.div`
  background: var(--colorPrimary);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Main = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding:100px 0 ;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  gap: 100px;
  text-align:center;
  @media screen and (max-width: 800px){
    grid-template-columns: repeat(1, 2fr);
`;
const Title = styled.div`
  color:#fff;
  margin-bottom:130px;
  font-size:36px;
  @media screen and (max-width:800px){
    font-size:30px;
  }
`
const Card = styled.div`
`
const Img  = styled.img`
    width:250px;
    height:250px;
    border-radius:50%;
`
const Section = styled.h3`
   color:#fff;
    margin-top:20px;

`
export {Container, Main, Content, Title, Card, Img, Section}