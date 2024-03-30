import React from "react";

const SuperButton = ({
  text,
  containerStyles,
}: {
  text: string;
  containerStyles: string;
}) => {
  return (
    <button>
      <span></span>
      <span>{text}</span>
    </button>
  );
};

export default SuperButton;
