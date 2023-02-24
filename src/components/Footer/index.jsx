import { Container, Content, Icon } from "./style";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Bog'lanish</Content.Title>
        <Content.Item>
          <Icon.Maps />{" "}
          <span className="footerSpan">
            Farg'ona shahar, Farg'ona davlat universiteti
          </span>
        </Content.Item>
        <Content.Item>
          {" "}
          <Icon.Phone /> +998 901502762
        </Content.Item>
        <Content.Item>
          <Icon.Email /> <span className="footerSpan">mdevs@gmail.com</span>
        </Content.Item>
      </Content>
      <Content>
        <Content.Title>Davlatlar</Content.Title>

        <Content.Item> Uzbekistan</Content.Item>
        <Content.Item> India</Content.Item>
        <Content.Item> UAE</Content.Item>
        <Content.Item> Korea</Content.Item>
      </Content>
      <Content>
        <Content.Title>Yo'nalishlar</Content.Title>

        <Content.Item>Frontend </Content.Item>
        <Content.Item>Backend </Content.Item>
        <Content.Item>Mobile </Content.Item>
        <Content.Item>Flutter </Content.Item>
        <Content.Item>Android </Content.Item>
      </Content>
      <Content>
        <Content.Title>Aloqa</Content.Title>

        <Content.Item>t.me/mdevs_admin</Content.Item>
        <Content.Item>t.me/mdevs_ceo</Content.Item>
        <Content.Item>instagram.com/mdevs_admin</Content.Item>
        <Content.Item>instagram.com/mdevs_group</Content.Item>
      </Content>
    </Container>
  );
};

export default Footer;
