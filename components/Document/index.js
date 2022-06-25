import React from "react";
import s from "./Document.module.css";

export const Document = ({ children, title, attachments }) => {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <div className={s.header}>
          <h2>{title}</h2>
        </div>

        <div className={s.content}>
          <div className={s.item}>
            <h3>Descrição</h3>
            {children}
          </div>
          <hr className={s.line} />

          <div className={s.item}>
            <h3>Anexos</h3>
            <ul>
              {attachments.data.map((attachment, index) => {
                const { name } = attachment.attributes;
                const { url } = attachment.attributes.file.data[0].attributes;
                return (
                  <li key={index}>
                    <a target="_blank" href={url} rel="noopener noreferrer">
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
