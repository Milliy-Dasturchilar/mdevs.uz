import styled from "styled-components";
import { ReactComponent as email } from "../../assets/icons/cardMassage.svg";
import { ReactComponent as calculator } from "../../assets/icons/calculator.svg";
import { ReactComponent as cardHouse } from "../../assets/icons/cardHouse.svg";
import { ReactComponent as cardMaps } from "../../assets/icons/cardMaps.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 100%;
  // margin:0 auto;
  margin-bottom: 0px;
  background: #f5f7fc;
  padding: 68px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 435px;
  width: 100%;
  text-align: center;
  @media screen and (max-width: 800px) {
    max-width:300px;
   
  }
`;
const Wrapper = styled.div`
  max-width: 1260px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;
const Card = styled.div`
  
  max-width: 235px;
  width: 100%;
  text-align: center;
  margin-top:50px;
`;
const Icon = styled.div``;
Icon.Email = styled(email)`
  margin-bottom: 24px;
  & path {
    fill: #0061df;
  }
`;
Icon.Calculator = styled(calculator)`
  margin-bottom: 24px;
`;
Icon.House = styled(cardHouse)`
  margin-bottom: 24px;
`;
Icon.Maps = styled(cardMaps)`
  margin-bottom: 24px;
`;

export { Container, Content, Wrapper, Card, Icon };
