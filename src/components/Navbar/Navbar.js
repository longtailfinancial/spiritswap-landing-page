import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button, GithubIcon } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              {/* <NavIcon /> DIESEL */}
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onclick={handleClick} click={click}>
              {/* Home Page */}
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              {/* Docs Page */}
              <NavItem>
                <NavLinks to="/Motivation" onClick={closeMobileMenu}>
                  Motivation
                </NavLinks>
              </NavItem>
              {/* Motivation Page */}
              <NavItem>
                <NavLinks to="/Docs" onClick={closeMobileMenu}>
                  Docs
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/see-code">
                    <Button primary>
                      <GithubIcon />
                      Add your plugin
                    </Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/see-code">
                    <Button onClick={closeMobileMenu} fontBig primary>
                      <GithubIcon />
                      Add your plugin
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
