import React from 'react'
import { Container, Content, Img, Logo, Main } from './style'
import mainImg  from "../../assets/img/mainImg.jpg"
const SectionFirst = () => {
  return (
    <Container>
      <Main>
        <Content>
          <Logo className="logo">Mdevs</Logo>
          <h3 className="title">
            Dasturiy ta'minot ishlab chiquvchi yosh kompaniya
          </h3>
        </Content>
        <Content>
          <Img src={mainImg} />
        </Content>
      </Main>
    </Container>
  );
}

export default SectionFirst