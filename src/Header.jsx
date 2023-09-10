import React, { useState, useContext, useRef, useEffect } from "react";
import "./Header.scss";
import logo from "./assets/images/logo.svg";
import iconCart from "./assets/images/icon-cart.svg";
import userImg from "./assets/images/image-avatar.png";
import "animate.css";
import { context } from "./Contexts/context";

const Header = () => {
  const [toggleBtn, setToggleBtn] = useState("header__toggleBtn");
  const [mobileMenu, setMobileMenu] = useState("header__nav");
  const [overlay, setOverlay] = useState("overlay");

  const headerCart = useRef(null);
  const { cartItems } = useContext(context);

  useEffect(() => {
    if (cartItems > 0) {
      headerCart.current.style.display = "block";
    } else {
      headerCart.current.style.display = "none";
    }
  }, [cartItems]);

  function toggleMenu() {
    if (toggleBtn === "header__toggleBtn") {
      setToggleBtn("header__toggleBtn open");
      setMobileMenu("header__nav show");
      setOverlay("overlay show");
    } else {
      setToggleBtn("header__toggleBtn");
      setMobileMenu("header__nav");
      setOverlay("overlay");
    }
  }
  return (
    <>
      <div className={overlay}></div>

      <header className="header">
        <button className={toggleBtn} onClick={toggleMenu}>
          <span className="header__topBar"></span>
          <span className="header__middleBar"></span>
          <span className="header__bottomBar"></span>
        </button>

        <img src={logo} className="header__logo" alt="Logo" />

        <nav className={`animate__animated animate__slideInLeft ${mobileMenu}`}>
          <ul>
            <li>
              <a href="#" title="collections">
                Collections
              </a>
            </li>
            <li>
              <a href="#" title="men">
                Men
              </a>
            </li>
            <li>
              <a href="#" title="women">
                Women
              </a>
            </li>
            <li>
              <a href="#" title="about">
                About
              </a>
            </li>
            <li>
              <a href="#" title="contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__profile">
          <div className="header__cart">
            <img src={iconCart} alt="Icon Cart" />
            <span ref={headerCart} className="header__cartItems">
              {cartItems}
            </span>
          </div>

          <div className="header__user">
            <img src={userImg} alt="User" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
