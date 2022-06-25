import React from "react";
import s from "./TeacherCard.module.css"

export const TeacherCard = (props) => {
  return (
    <div className={`card card-side bg-base-100 shadow-xl ${s.container}`}>
      <figure className={s.imgContainer}>
        <img
          src={props.info.image.data.attributes.url}
          alt={props.info.name}
          style={{ width: "100%", height: "100%" }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.info.name}</h2>
        <h3>{props.info.subtitle}</h3>
        <p>{props.info.graduation}</p>
        <p>{props.info.email}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary" target="_blank" href={props.info.lattes_url}>Lattes</a>
        </div>
      </div>
    </div>
  );
};
