import React from "react";

const SuperButton = ({
  text,
  containerStyles,
}: {
  text: string;
  containerStyles: string;
}) => {
  return (
    <button
      className={`${containerStyles} group relative cursor-pointer overflow-hidden`}
    >
      <span></span>
      <span>{text}</span>
    </button>
  );
};

export default SuperButton;
