import react from "react";
import s from "./Info.module.css";

export const Info = () => {
    return(
       <>
            <p className={s.text}>
                O Bacharelado de Ciência da Computação na UENF inicia suas atividades acadêmicas no ano 2007 no Centro de Ciências e Tecnologias (CCT) e anexo ao Laboratório de Ciências Matemáticas (LCMAT). O curso foi projetado, dentro do paradigma de Darcy Ribeiro, baseado nas diretrizes curriculares de computação de MEC e respeitando os critérios internacionais dados por ACM-IEEE- AIS, com um perfil científico-tecnológico, sem descuidar suas aplicações imediatas, para formar cientistas em computação que serão uma alternativa de desenvolvimento científico e tecnológico da região e do país.
            </p>
            <p className={s.text}>
                Com esse objetivo, o Bacharelado de Ciência da Computação diferencia-se dos outros cursos de computação em sua grade curricular, qualificado pelo MEC nas últimas avaliações de ENADE com melhor conceito.
            </p>
            <p className={s.text}>
                O egresso de este curso, esta preparado para atuar na área acadêmica e pesquisa em computação, seguindo os cursos de pós-graduação. A base curricular lhe permite, também, atuar como impulsor de inovações tecnológicas em software e parte de hardware; fábrica de softwares inteligentes; ferramentas de interação humano e computador em diferentes plataformas e níveis; gestão, manipulação e análise eficiente de toda categoria de dados; engenharia de dados; desenvolvimento de games; gestão e configuração de redes de computadores; atuação em projetos envolvendo novos paradigmas e tecnologias emergentes; atuação como analista e desenvolvedor de todo sistemas de software de aplicações computacionais demandadas pelas empresas.
            </p>
       </>
    );
};


