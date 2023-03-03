import React, { useState } from "react";
import { Container, Main, Section, Wrapper, Link, Logo, Mobile } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import Footer from "../Footer";
import { Button, Drawer } from "antd";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const navigate= useNavigate();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section>
            <Logo onClick={()=>navigate("/home")}>MDevs</Logo>
          </Section>
          <Section hidden>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Mobile>
            <Button type="primary" onClick={showDrawer}>
              <FaBars />
            </Button>
            <Drawer
              className="drawer"
              placement="right"
              onClose={onClose}
              open={open}
            >
              <Section mobile>
                {navbar.map(({ title, path, hidden }, index) => {
                  return (
                    !hidden && (
                      <Link
                        onClick={() => setOpen(false)}
                        className={({ isActive }) => isActive && "active"}
                        key={index}
                        to={path}
                      >
                        {title}
                      </Link>
                    )
                  );
                })}
              </Section>
            </Drawer>
          </Mobile>
        </Wrapper>
      </Main>
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Navbar;
