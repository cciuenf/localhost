import React from "react";
import s from "./Info.module.css";

export const Info = ({ text }) => {
  const html = {
    __html: text,
  };

  return (
    <>
      <div dangerouslySetInnerHTML={html} className={s.text}></div>
    </>
  );
};
