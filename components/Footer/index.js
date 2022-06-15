import React from "react";


import s from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer data-theme="mytheme" className={s.footer}>
            <h4 className="font-medium text-xl text-white line leading-10">Mais Informações</h4>
            <p className="font-regular text-sg text-white leading-8">
                AV. ALBERTO LAMEGO, 2000 - PARQUE CALIFÓRNIA | PRÉDIO P5, SALA 119 | CAMPOS DOS GOYTACAZES - RJ | CEP: 28013-602
            </p>
        </footer>
    );
};
