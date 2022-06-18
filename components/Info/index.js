import React from "react";
import s from "./Info.module.css";

export const Info = (text) => {
  const textArray = text.text.split("\n");

  return (
    <>
      {textArray.map((text, index) => (
        <p key={index} className={s.text}>
          {text}
        </p>
      ))}
    </>
  );
};
