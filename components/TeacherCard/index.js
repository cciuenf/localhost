import React from "react";
import Image from "next/image";

import s from "./TeacherCard.module.css";

export const TeacherCard = (props) => {
  return (
    <>
      <div className={s.wrapper}>
        <figure className={s.figure}>
          <Image
            className={s.img}
            src={props.info.image.data.attributes.url}
            alt={props.info.name}
            width={300}
            height={320}
          />
        </figure>
        <div className={s.body}>
          <h2 className={s.name}>{props.info.name}</h2>
          <p style={{ textAlign: "justify" }}>{props.info.graduation}</p>
          <h3>Área de pesquisa: {props.info.study_area}</h3>
          <p>{props.info.email}</p>
          <div className="card-actions justify-end">
            <a
              className="btn btn-outline btn-primary hover:white"
              target="_blank"
              rel="noopener noreferrer"
              href={props.info.lattes_url}
            >
              Lattes
            </a>
            <a
              className="btn btn-outline btn-primary hover:text-white"
              href={`/${props.info.website_url}`}
            >
              Página Pessoal
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
