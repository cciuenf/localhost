import React from "react";
import s from "./TeacherCard.module.css"

export const TeacherCard = (props) => {
  return (
    <>
      <div className={s.wrapper}>
        <figure className={s.figure}>
          <img
            className={s.img}
            src={props.info.image.data.attributes.url}
            alt={props.info.name}
          />
        </figure>
        <div className={s.body}>
          <h2 className={s.name}>{props.info.name}</h2>
          <h3>{props.info.subtitle}</h3>
          <p>{props.info.graduation}</p>
          <p>{props.info.email}</p>
          <div className="card-actions justify-end">
            <a className="btn btn-primary" target="_blank" href={props.info.lattes_url}>Lattes</a>
          </div>
        </div>
      </div>
    </>
  );
};
