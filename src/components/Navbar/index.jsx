import React from "react";
import { Container, Main, Section, Wrapper, Link, Logo } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import Footer from "../Footer"
const Navbar = () => {
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section>
            <Logo>MDevs</Logo>
          </Section>
          <Section>
          {navbar.map(({title,path,hidden}, index)=>{
            return(
              !hidden&&<Link 
              className={({isActive})=>isActive&& "active"}
              key={index}
              to={path}
              >{title}</Link>
            )
          })}
          </Section>
        </Wrapper>
      </Main>
      <Outlet/>
      <Footer />
    </Container>
  );
};

export default Navbar;
