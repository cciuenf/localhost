import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Seo } from "../Seo";
import s from "./Layout.module.css";

export const Layout = ({ seo, children }) => {
  return (
    <>
      <Seo {...seo} />
      <Header />
      <main className={s.wrapper}>{children}</main>
      <Footer />
    </>
  );
};
