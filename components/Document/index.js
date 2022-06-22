import React from "react";
import s from "./Document.module.css";

export const Document = ({ children, title, attachments, urlDownloadAll }) => {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <div className={s.header}>
          <h2>{title}</h2>
          {!!urlDownloadAll && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={urlDownloadAll}
              className="btn btn-md z-[100] text-white"
            >
              Baixar todos anexos
            </a>
          )}
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
              {attachments.map((attachment, index) => (
                <li key={index}>
                  <a
                    target="_blank"
                    href={attachment.url}
                    rel="noopener noreferrer"
                  >
                    {attachment.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
