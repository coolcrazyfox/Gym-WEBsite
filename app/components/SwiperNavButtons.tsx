"use client";
import { useSwiper } from "swiper/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const SwiperNavButtons = ({
  containerStyles,
  btnStyles,
  iconStyles,
}: {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}) => {
  const swiper = useSwiper();
  return (
    <div className={`${containerStyles}`}>
      <button className={`${btnStyles}`} onClick={() => swiper.slidePrev()}>
        <SlArrowLeft className={`${iconStyles}`} />
      </button>
      <button className={`${btnStyles}`} onClick={() => swiper.slideNext()}>
        <SlArrowRight className={`${iconStyles}`} />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
