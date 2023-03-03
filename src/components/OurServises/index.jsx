import React from 'react'
import { services } from '../../utils/konstant';
import { Card, Container, Content, Img, Main, Section, Title } from './style';
const OurServises = () => {
  return (
    <Container>
      <Main>
        <Title className="title">Bizning xizmatlar</Title>
        <Content>
          {services.map((servise) => {
            const { id, img, title } = servise;
            return (
              <Card id={id}>
                <Img src={img} />
                <Section>{title}</Section>
              </Card>
            );
          })}
        </Content>
      </Main>
    </Container>
  );
}

export default OurServises;