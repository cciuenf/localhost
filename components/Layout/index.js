import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Seo } from "../Seo";

export const Layout = ({ seo, children }) => {
  return (
    <>
      <Seo {...seo} />
      <Header />
      {children}
      <Footer />
    </>
  );
};
