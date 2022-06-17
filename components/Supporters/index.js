import Image from "next/image";
import Link from "next/link";
import React from "react";

import s from "./Supporters.module.css";

export const Supporters = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <Link
          href="https://www.visual-paradigm.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <a>
            <Image
              src="/assets/logo-vp.png"
              alt="Visual Paradigm"
              width={300}
              height={73}
            />
          </a>
        </Link>
        <p>
          The{" "}
          <a
            href="https://www.visual-paradigm.com/features/uml-tool/"
            target="_blank"
            rel="noreferrer noopener"
          >
            UML
          </a>
          ,{" "}
          <a
            href="https://www.visual-paradigm.com/features/database-design-with-erd-tools/"
            target="_blank"
            rel="noreferrer noopener"
          >
            ERD
          </a>{" "}
          and{" "}
          <a
            href="https://www.visual-paradigm.com/features/agile-development-tools/#user-story-map"
            target="_blank"
            rel="noreferrer noopener"
          >
            user story tools
          </a>{" "}
          are made available to UENF - Universidade Estadual do Norte Fluminense
          Darcy Ribeiro by the{" "}
          <a
            href="https://www.visual-paradigm.com/partner/academic/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Academic Partner Program
          </a>{" "}
          from{" "}
          <a
            href="https://www.visual-paradigm.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Visual Paradigm
          </a>{" "}
          for educational use.
        </p>
      </li>
      <li className={s.item}>
        <Link
          href="https://unity.com/pt"
          target="_blank"
          rel="noreferrer noopener"
        >
          <a>
            <Image
              src="/assets/logo-unity.png"
              alt="Visual Paradigm"
              width={150}
              height={54}
            />
          </a>
        </Link>
      </li>
    </ul>
  );
};
