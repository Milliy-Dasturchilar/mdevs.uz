import React from 'react'
import { Container, Content, Img, Logo, Main, Title } from './style'
import Button from '../Button'
import mainImg  from "../../assets/img/mainImg.jpg"
import { useNavigate } from 'react-router-dom'
const SectionFirst = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Main>
        <Content>
          <Logo className="logo">Mdevs</Logo>
          <Title className="title">
            Dasturiy ta'minot ishlab chiquvchi yosh kompaniya
          </Title>
          <Button onClick={()=>navigate("/servise")}>Bizning xizmatlar</Button>
        </Content>
        <Content>
          <Img src={mainImg} />
        </Content>
      </Main>
    </Container>
  );
}

export default SectionFirst