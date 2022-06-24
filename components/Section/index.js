import Link from "next/link";
import React from "react";
import s from "./Section.module.css";

export const Section = (props) => {
  return (
    <section
      style={{ background: props.backgroundColor, marginTop: props.mt }}
      className={s.wrapper}
    >
      <div className="wrapper">
        <div className={s.header}>
          <h2 className={s.title}>{props.title}</h2>
          {props.rightLink && (
            <Link href={props.rightLink.href}>
              <a className={s.link}>{props.rightLink.text}</a>
            </Link>
          )}
        </div>
        <hr className={s.line} />
        {props.children}
      </div>
    </section>
  );
};
