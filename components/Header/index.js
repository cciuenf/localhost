import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CaretDown } from "phosphor-react";

import s from "./Header.module.css";

export const Header = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [logoWidth, setLogoWidth] = useState(150);
  const [logoHeight, setLogoHeight] = useState(80);

  const [padding, setPadding] = useState(20);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacy = clientWindowHeight / 600;

    if (backgroundTransparacy < 1) {
      let padding = 15 - backgroundTransparacy * 10;
      let logoWidth = 150 - backgroundTransparacy * 20;
      let logoHeight = 90 - backgroundTransparacy * 20;
      let boxShadow = backgroundTransparacy * 0.1;
      setPadding(padding);
      setBoxShadow(boxShadow);
      setLogoWidth(logoWidth);
      setLogoHeight(logoHeight);
    }
  }, [clientWindowHeight]);

  return (
    <div
    className={s.wrapper}
    >
      <div
        className={s.header}
        style={{
          padding: `${padding}px 10px`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        }}
      >
        <div className={s.logo}>
          <a href=".">
            <Image
              src="/assets/logo-cc-branco.png"
              alt="logo Ciência da Computação - UENF"
              width={logoWidth}
              height={logoHeight}
            />
          </a>
        </div>
        <nav className={s.nav}>
          <ul>
            <li>
              <a href="">Apresentação</a>
            </li>
            <li className="dropdown dropdown-end dropdown-hover">
              <a>
                Pessoas
                <CaretDown />
              </a>
              <ul
                tabIndex="0"
                className="menu dropdown-content p-1 shadow bg-base-100 rounded-box w-52 mt-0"
              >
                <li>
                  <a className={s.dropdown_link} href="">
                    Item 1
                  </a>
                </li>
                <li href="">
                  <a className={s.dropdown_link}>Item 2</a>
                </li>
              </ul>
            </li>
            <li className="dropdown dropdown-end dropdown-hover">
              <a>
                Documentos
                <CaretDown />
              </a>
              <ul
                tabIndex="0"
                className="menu dropdown-content p-1 shadow bg-base-100 rounded-box w-52 mt-0"
              >
                <li>
                  <a className={s.dropdown_link} href="">
                    Item 1
                  </a>
                </li>
                <li href="">
                  <a className={s.dropdown_link}>Item 2</a>
                </li>
              </ul>
            </li>
            <li className="dropdown dropdown-end dropdown-hover">
              <a>
                Produção
                <CaretDown />
              </a>
              <ul
                tabIndex="0"
                className="menu dropdown-content p-1 shadow bg-base-100 rounded-box w-52 mt-0"
              >
                <li>
                  <a className={s.dropdown_link} href="">
                    Item 1
                  </a>
                </li>
                <li href="">
                  <a className={s.dropdown_link}>Item 2</a>
                </li>
              </ul>
            </li>
            <li className="dropdown dropdown-end dropdown-hover">
              <a>
                Links Úteis
                <CaretDown />
              </a>
              <ul
                tabIndex="0"
                className="menu dropdown-content p-1 shadow bg-base-100 rounded-box w-52 mt-0"
              >
                <li>
                  <a className={s.dropdown_link} href="">
                    Item 1
                  </a>
                </li>
                <li href="">
                  <a className={s.dropdown_link}>Item 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
