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
      className={`${containerStyles} group relative cursor-pointer overflow-hidden bg-accent uppercase`}
    >
      <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-2"></span>
      <span>{text}</span>
    </button>
  );
};

export default SuperButton;
