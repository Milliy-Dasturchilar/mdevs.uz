import styled from "styled-components";

const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  height: 70vh;
  margin-top: 100px;
`;
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;
const Logo = styled.h1`
  margin-bottom: 100px;
  @media screen and (max-width: 800px) {
    margin-top:20px;
  }
`;
const Title = styled.h3`
  width: 400px;
  margin-bottom: 30px;
  color: #0d263b;
`;
const Img = styled.img`
  width: 700px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 13px 23px 48px 3px rgba(34, 107, 155, 0.53);
  -webkit-box-shadow: 13px 23px 48px 3px rgba(34, 107, 155, 0.53);
  -moz-box-shadow: 13px 23px 48px 3px rgba(34, 107, 155, 0.53);
  @media screen and (max-width: 800px) {
    width: 370px;
    height: 250px;
    margin-top:50px;
  }
`;
export { Container, Main, Content, Logo,Title, Img };
