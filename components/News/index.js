import Link from "next/link";
import React from "react";
import s from "./News.module.css";

export const News = (props) => {
  const publishedAt = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
  }).format(new Date(props.published_at));

  const authors = props.authors.data
    .map((author) => author.attributes.name)
    .join(", ");

  return (
    <div className={s.wrapper}>
      <div
        style={{
          height: "300px",
          background: `url('${props.img}')`,
          backgroundSize: "cover",
        }}
      />
      <h3 className={s.text}>
        <Link href={props.link}>
          <a>{props.title}</a>
        </Link>
      </h3>
      <div>
        <span className={s.info}>
          {authors} | {publishedAt}
        </span>
      </div>
      <div>
        <p className={s.description}>
          {props.description}{" "}
          <Link href={props.link}>
            <a className={s.link}>Ler mais</a>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};
