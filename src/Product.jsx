import React, { useState, useContext, useRef, useEffect } from "react";
import "./Product.scss";
import product1ImgThumb from "./assets/images/image-product-1-thumbnail.jpg";
import product2ImgThumb from "./assets/images/image-product-2-thumbnail.jpg";
import product3ImgThumb from "./assets/images/image-product-3-thumbnail.jpg";
import product4ImgThumb from "./assets/images/image-product-4-thumbnail.jpg";
import product1Img from "./assets/images/image-product-1.jpg";
import product2Img from "./assets/images/image-product-2.jpg";
import product3Img from "./assets/images/image-product-3.jpg";
import product4Img from "./assets/images/image-product-4.jpg";
import iconMinus from "./assets/images/icon-minus.svg";
import iconPlus from "./assets/images/icon-plus.svg";
import iconCart from "./assets/images/icon-cart.svg";
import iconPrevious from "./assets/images/icon-previous.svg";
import iconNext from "./assets/images/icon-next.svg";
import { context } from "./Contexts/context";

const Product = () => {
  const { cartItems } = useContext(context);
  const { setCartItems } = useContext(context);
  const { count } = useContext(context);
  const { setCount } = useContext(context);
  const { thumbClick } = useContext(context);
  const { setThumbClick } = useContext(context);

  function increment() {
    setCartItems(cartItems + 1);
  }

  function decrement() {
    setCartItems(cartItems - 1);

    if (cartItems === 0) {
      setCartItems(0);
    }
  }

  const [thumbnail1, setThumbnail1] = useState("product__imageCard selected");
  const [thumbnail2, setThumbnail2] = useState("product__imageCard");
  const [thumbnail3, setThumbnail3] = useState("product__imageCard");
  const [thumbnail4, setThumbnail4] = useState("product__imageCard");

  const mainImage = useRef(null);

  const thumb1 = useRef(null);
  const thumb2 = useRef(null);
  const thumb3 = useRef(null);
  const thumb4 = useRef(null);

  function bg1() {
    mainImage.current.style.background = `url(${product1Img}) no-repeat center center/cover`;
  }

  function bg2() {
    mainImage.current.style.background = `url(${product2Img}) no-repeat center center/cover`;
  }

  function bg3() {
    mainImage.current.style.background = `url(${product3Img}) no-repeat center center/cover`;
  }

  function bg4() {
    mainImage.current.style.background = `url(${product4Img}) no-repeat center center/cover`;
  }

  function selectThumb1() {
    if (thumbnail1 === "product__imageCard") {
      setCount(1);
      setThumbnail1("product__imageCard selected");

      setThumbnail2("product__imageCard");
      setThumbnail3("product__imageCard");
      setThumbnail4("product__imageCard");

      bg1();
    }
  }

  function selectThumb2() {
    if (thumbnail2 === "product__imageCard") {
      setCount(2);
      setThumbnail2("product__imageCard selected");

      setThumbnail1("product__imageCard");
      setThumbnail3("product__imageCard");
      setThumbnail4("product__imageCard");

      bg2();
    }
  }

  function selectThumb3() {
    if (thumbnail3 === "product__imageCard") {
      setCount(3);
      setThumbnail3("product__imageCard selected");

      setThumbnail1("product__imageCard");
      setThumbnail2("product__imageCard");
      setThumbnail4("product__imageCard");

      bg3();
    }
  }

  function selectThumb4() {
    if (thumbnail4 === "product__imageCard") {
      setCount(4);
      setThumbnail4("product__imageCard selected");

      setThumbnail1("product__imageCard");
      setThumbnail2("product__imageCard");
      setThumbnail3("product__imageCard");

      bg4();
    }
  }

  function checkThumbClick() {
    if (thumbClick === false) {
      setThumbClick(true);
    }
  }

  function nextImg() {
    setCount(count + 1);
    if (count >= 4) {
      setCount(1);
    }
  }

  function previousImg() {
    setCount(count - 1);
    if (count <= 1) {
      setCount(4);
    }
  }

  function changeImage() {
    switch (count) {
      case 1:
        bg1();
        thumb1.current.classList.add("selected");

        thumb2.current.classList.remove("selected");
        thumb3.current.classList.remove("selected");
        thumb4.current.classList.remove("selected");
        break;
      case 2:
        bg2();
        thumb2.current.classList.add("selected");

        thumb1.current.classList.remove("selected");
        thumb3.current.classList.remove("selected");
        thumb4.current.classList.remove("selected");
        break;
      case 3:
        bg3();
        thumb3.current.classList.add("selected");

        thumb1.current.classList.remove("selected");
        thumb2.current.classList.remove("selected");
        thumb4.current.classList.remove("selected");
        break;
      case 4:
        bg4();
        thumb4.current.classList.add("selected");

        thumb1.current.classList.remove("selected");
        thumb2.current.classList.remove("selected");
        thumb3.current.classList.remove("selected");
        break;
    }
  }

  useEffect(() => {
    changeImage();
  }, [count]);

  return (
    <main className="product">
      <div className="product__images">
        <div ref={mainImage} className="product__mainImage">
          <div className="product__previous" onClick={previousImg}>
            <img src={iconPrevious} alt="Icon Previous" />
          </div>
          <div className="product__next" onClick={nextImg}>
            <img src={iconNext} alt="Icon Previous" />
          </div>
        </div>

        <div className="product__imageCards">
          <div
            ref={thumb1}
            className={thumbnail1}
            onClick={() => {
              selectThumb1();
              checkThumbClick();
            }}
          >
            <img src={product1ImgThumb} alt="Product 1 Thumb" />
          </div>
          <div
            ref={thumb2}
            className={thumbnail2}
            onClick={() => {
              selectThumb2();
              checkThumbClick();
            }}
          >
            <img src={product2ImgThumb} alt="Product 2 Thumb" />
          </div>
          <div
            ref={thumb3}
            className={thumbnail3}
            onClick={() => {
              selectThumb3();
              checkThumbClick();
            }}
          >
            <img src={product3ImgThumb} alt="Product 3 Thumb" />
          </div>
          <div
            ref={thumb4}
            className={thumbnail4}
            onClick={() => {
              selectThumb4();
              checkThumbClick();
            }}
          >
            <img src={product4ImgThumb} alt="Product 4 Thumb" />
          </div>
        </div>
      </div>

      <div className="product__content">
        <span className="product__company">Sneaker Company</span>

        <h1 className="product__title">Fall Limited Edition Sneakers</h1>
        <p className="product__description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="product__price">
          <span className="product__currentPrice">$125.00</span>
          <span className="product__discount">50%</span>
        </div>
        <span className="product__discountedPrice">$250</span>
        <div className="product__cart">
          <div className="product__cartItems">
            <img src={iconMinus} alt="Icon Minus" onClick={decrement} />
            <span>{cartItems}</span>
            <img src={iconPlus} alt="Icon Plus" onClick={increment} />
          </div>

          <button className="product__addToCart" onClick={increment}>
            <img src={iconCart} alt="Icon Cart" />
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default Product;
