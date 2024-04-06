"use client";
import { useSwiper } from "swiper/react";
import { SlArrowLeft, SlArrowRight  } from "react-icons/sl";

const SwiperNavButtons = ({
  containerStyles,
  btnStyles,
  iconStyles,
}: {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={`${containerStyles}`}>
      <button className={`${btnStyles}`}>
        <SlArrowLeft className={`${iconStyles}`} />
      </button>
      <button className={`${btnStyles}`}>
        <SlArrowRight  className={`${iconStyles}`} />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
