import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CaretDown } from "phosphor-react";

import s from "./Header.module.css";
import Link from "next/link";

export const Header = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [logoWidth, setLogoWidth] = useState(150);
  const [logoHeight, setLogoHeight] = useState(92.14);

  const [padding, setPadding] = useState(20);

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
      let logoWidth = 160 - backgroundTransparacy * 30;
      let logoHeight = 100 - backgroundTransparacy * 20;
      setPadding(padding);
      setLogoWidth(logoWidth);
      setLogoHeight(logoHeight);
    }
  }, [clientWindowHeight]);

  return (
    <div className={s.wrapper}>
      <header
        className={s.header}
        style={{
          padding: `${padding}px 10px`,
        }}
      >
        <div className={s.logo}>
          <Link href="/">
            <a href="javascript:void(0)">
              <Image
                src="/assets/logo-cc-branco.png"
                alt="logo Ciência da Computação - UENF"
                width={logoWidth}
                height={logoHeight}
              />
            </a>
          </Link>
        </div>
        <nav className={s.nav}>
          <ul>
            <li>
              <Link href="/">Apresentação</Link>
            </li>
            <li className="dropdown dropdown-end dropdown-hover">
              <Link href="/pessoas">
                <a href="javascript:void(0)">
                  Pessoas
                  <CaretDown />
                </a>
              </Link>
              <ul
                tabIndex="0"
                className="menu dropdown-content p-1 shadow bg-base-100 rounded-box w-52 mt-0"
              >
                <li>
                  <Link href="/pessoas">
                    <a className={s.dropdown_link} href="javascript:void(0)">
                      Professores
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/pessoas">
                    <a className={s.dropdown_link} href="javascript:void(0)">
                      Administração
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/pessoas">
                    <a className={s.dropdown_link} href="javascript:void(0)">
                      Discentes
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown dropdown-end dropdown-hover">
              <Link href="/documentos">
                <a href="javascript:void(0)">
                  Documentos
                  <CaretDown />
                </a>
              </Link>
              <ul
                tabIndex="0"
                className="menu dropdown-content p-1 shadow bg-base-100 rounded-box w-52 mt-0"
              >
                <li>
                  <Link href="/documentos">
                    <a className={s.dropdown_link} href="javascript:void(0)">
                      Item 1
                    </a>
                  </Link>
                </li>
                <li href="">
                  <Link href="/documentos">
                    <a className={s.dropdown_link} href="javascript:void(0)">
                      Item 2
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown dropdown-end dropdown-hover">
              <Link href="/producao">
                <a href="javascript:void(0)">
                  Produção
                  <CaretDown />
                </a>
              </Link>
              <ul
                tabIndex="0"
                className="menu dropdown-content p-1 shadow bg-base-100 rounded-box w-52 mt-0"
              >
                <li>
                  <Link href="/producao">
                    <a className={s.dropdown_link} href="javascript:void(0)">
                      Item 1
                    </a>
                  </Link>
                </li>
                <li href="">
                  <Link href="/producao">
                    <a className={s.dropdown_link} href="javascript:void(0)">
                      Item 2
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown dropdown-end dropdown-hover">
              <Link href="/links-uteis">
                <a href="javascript:void(0)">
                  Links Úteis
                  <CaretDown />
                </a>
              </Link>
              <ul
                tabIndex="0"
                className="menu dropdown-content p-1 shadow bg-base-100 rounded-box w-52 mt-0"
              >
                <li>
                  <Link href="/links-uteis">
                    <a className={s.dropdown_link} href="javascript:void(0)">
                      Item 1
                    </a>
                  </Link>
                </li>
                <li href="">
                  <Link href="/links-uteis">
                    <a className={s.dropdown_link} href="javascript:void(0)">
                      Item 2
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
