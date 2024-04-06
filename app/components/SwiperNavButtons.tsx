"use client";
import { useSwiper } from "swiper/react";
import {
  TbSquareRoundedArrowLeft,
  TbSquareRoundedArrowRight,
} from "react-icons/tb";

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
        <TbSquareRoundedArrowLeft className={`${iconStyles}`} />
      </button>
      <button className={`${btnStyles}`}>
        <TbSquareRoundedArrowRight className={`${iconStyles}`} />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
