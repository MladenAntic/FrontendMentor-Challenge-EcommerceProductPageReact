import React, { useState, useContext, useEffect, useRef } from "react";
import "./Lightbox.scss";
import product1ImgThumb from "./assets/images/image-product-1-thumbnail.jpg";
import product2ImgThumb from "./assets/images/image-product-2-thumbnail.jpg";
import product3ImgThumb from "./assets/images/image-product-3-thumbnail.jpg";
import product4ImgThumb from "./assets/images/image-product-4-thumbnail.jpg";
import product1Img from "./assets/images/image-product-1.jpg";
import product2Img from "./assets/images/image-product-2.jpg";
import product3Img from "./assets/images/image-product-3.jpg";
import product4Img from "./assets/images/image-product-4.jpg";
import iconPrevious from "./assets/images/icon-previous.svg";
import iconNext from "./assets/images/icon-next.svg";
import iconClose from "./assets/images/icon-close.svg";
import { context } from "./Contexts/context";

const Lightbox = () => {
  const { thumbClick } = useContext(context);
  const { setThumbClick } = useContext(context);
  const { count } = useContext(context);
  const { setCount } = useContext(context);

  const lightbox = useRef(null);

  function closeLightbox() {
    lightbox.current.style.display = "none";
    setThumbClick(false);
  }

  useEffect(() => {
    if (thumbClick === true) {
      lightbox.current.style.display = "grid";
    } else {
      lightbox.current.style.display = "none";
    }
  }, [thumbClick]);

  const [thumbnail1, setThumbnail1] = useState("lightbox__card selected");
  const [thumbnail2, setThumbnail2] = useState("lightbox__card");
  const [thumbnail3, setThumbnail3] = useState("lightbox__card");
  const [thumbnail4, setThumbnail4] = useState("lightbox__card");

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
    if (thumbnail1 === "lightbox__card") {
      setThumbnail1("lightbox__card selected");

      setThumbnail2("lightbox__card");
      setThumbnail3("lightbox__card");
      setThumbnail4("lightbox__card");

      bg1();
    }
  }

  function selectThumb2() {
    if (thumbnail2 === "lightbox__card") {
      setThumbnail2("lightbox__card selected");

      setThumbnail1("lightbox__card");
      setThumbnail3("lightbox__card");
      setThumbnail4("lightbox__card");

      bg2();
    }
  }

  function selectThumb3() {
    if (thumbnail3 === "lightbox__card") {
      setThumbnail3("lightbox__card selected");

      setThumbnail1("lightbox__card");
      setThumbnail2("lightbox__card");
      setThumbnail4("lightbox__card");

      bg3();
    }
  }

  function selectThumb4() {
    if (thumbnail4 === "lightbox__card") {
      setThumbnail4("lightbox__card selected");

      setThumbnail1("lightbox__card");
      setThumbnail2("lightbox__card");
      setThumbnail3("lightbox__card");

      bg4();
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
    <section ref={lightbox} className="lightbox">
      <div className="lightbox__gallery">
        <img
          src={iconClose}
          className="lightbox__close"
          alt="Icon Close"
          onClick={closeLightbox}
        />
        <div ref={mainImage} className="lightbox__image">
          <div className="lightbox__previous">
            <img src={iconPrevious} alt="Icon Previous" onClick={previousImg} />
          </div>
          <div className="lightbox__next">
            <img src={iconNext} alt="Icon Previous" onClick={nextImg} />
          </div>
        </div>

        <div className="lightbox__cards">
          <div ref={thumb1} className={thumbnail1} onClick={selectThumb1}>
            <img src={product1ImgThumb} alt="Product 1 Lightbox Thumb" />
          </div>
          <div ref={thumb2} className={thumbnail2} onClick={selectThumb2}>
            <img src={product2ImgThumb} alt="Product 2 Lightbox Thumb" />
          </div>
          <div ref={thumb3} className={thumbnail3} onClick={selectThumb3}>
            <img src={product3ImgThumb} alt="Product 3 Lightbox Thumb" />
          </div>
          <div ref={thumb4} className={thumbnail4} onClick={selectThumb4}>
            <img src={product4ImgThumb} alt="Product 4 Lightbox Thumb" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lightbox;
