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
const mobileHidden = ({ hidden }) => {
  if (hidden) {
    return {
      display: "none",
    };
  }
};
const mobileNavbar = ({ mobile }) => {
  if (mobile) {
    return {
      display: "flex",
      "align-items": "center",
      "flex-direction":"column",
      "justify-content":"center"
    };
  }else{
    return{
       display: "flex",
  
  "align-items": "center",
    }
  }
};

const Section = styled.div`
  ${mobileNavbar}
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: red;
  }
  @media screen and (max-width: 800px) {
    ${mobileHidden}
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
const Mobile = styled.div`
display:none;
@media screen and (max-width: 800px) {
    display:block;}
`;
export { Container, Main, Wrapper, Section, Link, Logo, Mobile };
