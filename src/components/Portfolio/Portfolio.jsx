import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import RickyMorty from "../../img/RickyMorty.png";
import Recordatorio from "../../img/Recordatorio.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portafolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" /> 
          <a href="https://starlit-arithmetic-a6a592.netlify.app"  target="_blank"></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={RickyMorty} alt="" />
          <a href="https://ubiquitous-kataifi-3fd803.netlify.app"  target="_blank"></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
          <a href="https://magical-trifle-14a7e4.netlify.app"  target="_blank"></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
          <a href="https://glistening-kringle-204622.netlify.app"  target="_blank"></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
          <a href="https://elegant-truffle-0686c6.netlify.app"  target="_blank"></a>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Recordatorio} alt="" />
          <a href="https://effortless-banoffee-52ecd1.netlify.app"  target="_blank"></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
