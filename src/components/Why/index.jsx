import { Container, Content, Wrapper, Icon, Card } from "./style";

export const Why = () => {
  return (
    <Container>
      <Content>
        <h1 className="title">Nima uchun bizni tanlaysiz</h1>
        <div className="info">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          est velit eligendi nam sequi pariatur voluptatibus quod at quas odio.{" "}
        </div>
      </Content>
      <Wrapper>
        <Card>
          <Icon.Email />
          <div className="subTitle">Trusted By Thousands</div>
          <div className="info">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Card>
        <Card>
          <Icon.House />
          <div className="subTitle">Wide Renge Of Properties</div>

          <div className="info">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Card>
        <Card>
          <Icon.Calculator />
          <div className="subTitle">Financing Made Easy</div>

          <div className="info">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Card>
        <Card>
          <Icon.Maps />
          <div className="subTitle">See Neighborhoods</div>

          <div className="info">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Why;
