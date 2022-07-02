import React from "react";
import s from "./Production.module.css";

export const Production = ({ children, title, authors, url }) => {
  const authorsList = authors.map((author) => author.attributes.name).sort();
  return (
    <section className={s.wrapper}>
      <div className={s.content}>
        <h2>{title}</h2>
        <div className={s.authors}>
          {authorsList.map((author, index) => {
            return <address key={index}>{author}</address>;
          })}
        </div>
        <p>{children}</p>
        <div className="button">
          <a
            target="_blank"
            href={url}
            rel="noopener noreferrer"
            className="btn btn-md z-[100] text-white"
          >
            Baixar em PDF
          </a>
        </div>
      </div>
    </section>
  );
};
