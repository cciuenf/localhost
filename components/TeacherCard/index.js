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
          <h3>{props.info.subtitle}</h3>
          <p>{props.info.graduation}</p>
          <p>{props.info.email}</p>
          <div className="card-actions justify-end">
            <a
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              href={props.info.lattes_url}
            >
              Lattes
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
