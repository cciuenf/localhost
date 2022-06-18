import Image from "next/image";
import React from "react";

import s from "./Supporters.module.css";

export const Supporters = (props) => {
  return (
    <ul className={s.list}>
      {props.supporters.map((supporter, index) => {
        const html = {
          __html: props.supporters[index].description,
        };

        return (
          <li className={s.item} key={index}>
            <a href={supporter.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={supporter.logo.data.attributes.url}
                alt={supporter.logo.data.attributes.alternativeText}
                width={supporter.width}
                height={supporter.height}
              />
            </a>
            {html && <div dangerouslySetInnerHTML={html}></div>}
          </li>
        );
      })}
    </ul>
  );
};
