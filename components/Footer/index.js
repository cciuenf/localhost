import React from "react";
import Link from "next/link";

import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer data-theme="mytheme" className={s.footer}>
      <h4 className="font-medium text-xl text-white line leading-10">
        Mais Informações
      </h4>
      <p className="font-regular text-sg text-white leading-8 uppercase">
        Av. Alberto Lamego, 2000 - Parque Califórnia | Prédio P5, Sala 119 |
        Campos Dos Goytacazes - Rj | CEP: 28013-602
      </p>
      <div>
        <Link href="/creditos">
          <a className="text-white block mt-3 border-white border w-fit m-auto p-2 rounded-md hover:bg-white hover:text-[#003a67] transition-colors">
            Ver créditos
          </a>
        </Link>
      </div>
    </footer>
  );
};
