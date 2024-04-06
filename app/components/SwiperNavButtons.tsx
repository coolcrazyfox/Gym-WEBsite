"use client";
import { useSwiper } from "swiper/react";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";

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
      <button>
        <ImArrowLeft className={`${iconStyles}`} />
      </button>
      <button>
        <ImArrowRight className={`${iconStyles}`} />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
