import React from "react";
import Image from "next/image";

import s from "./DeveloperCard.module.css";

export const DeveloperCard = (props) => {
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
          <p>{props.info.email}</p>
          <div className="card-actions mt-auto justify-end">
            {props.info.lattes_url && (
              <a
                className="btn btn-outline btn-primary hover:white"
                target="_blank"
                rel="noopener noreferrer"
                href={props.info.lattes_url}
              >
                Lattes
              </a>
            )}
            {props.info.github_url && (
              <a
                className="btn btn-outline btn-primary hover:white"
                target="_blank"
                rel="noopener noreferrer"
                href={props.info.github_url}
              >
                GitHub
              </a>
            )}
            {props.info.linkedin_url && (
              <a
                className="btn btn-outline btn-primary hover:white"
                target="_blank"
                rel="noopener noreferrer"
                href={props.info.linkedin_url}
              >
                LinkedIn
              </a>
            )}
            {props.info.website_url && (
              <a
                className="btn btn-outline btn-primary hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                href={props.info.website_url}
              >
                Página Pessoal
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
