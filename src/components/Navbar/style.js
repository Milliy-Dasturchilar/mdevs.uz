import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Main = styled.div`
  display: flex;
  // justify-content: center;
  background: var(--colorPrimary);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  color: #ffff;
  padding: var(--padding);
  height: 65px;
  font-size: 16px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: red;
  }
`;
const Link = styled(NavLink)`
  text-decoration: none;
  padding: 32px;
  color: #ffff;
`;
const Logo = styled.h1`
  width: 30px;
  margin-right: 12px;
  color:red;
  }
`;
export { Container, Main, Wrapper, Section, Link, Logo};
