import React from "react";
import s from "./Tabs.module.css";

export const Tabs = ({ children, title }) => {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <div className={s.header}>
          <h2>{title}</h2>
        </div>

        <div className={s.content}>
          <div className={s.item}>{children}</div>
        </div>
      </div>
    </section>
  );
};
