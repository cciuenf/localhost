import React from "react";
import Link from "next/link";
import Router from "next/router";
import { Layout } from "../../components/";
import { api } from "../../services/api";
import { Calendar, Users } from "phosphor-react";

import s from "../../styles/News.module.css";

const Noticias = (props) => {
  return (
    <Layout>
      <div className={"wrapper " + s.newsContainer}>
        <h1>Página {props.page}</h1>

        {props.articles.length === 0 && (
          <div className={s.noArticles}>
            <h2>Nenhuma notícia encontrada ou esta página não existe</h2>
          </div>
        )}

        <ul className={s.newsList}>
          {props.articles.map((article) => {
            const authors = article.attributes.authors.data
              .map((author) => author.attributes.name)
              .join(", ");

            const publishedAt = new Intl.DateTimeFormat("pt-BR", {
              dateStyle: "long",
            }).format(new Date(article.attributes.publishedAt));

            return (
              <li className={s.newsItem} key={article.id}>
                <h2>{article.attributes.title}</h2>
                <div className={s.meta}>
                  <p className={s.info}>
                    <Users />
                    {authors}
                  </p>
                  <p> | </p>
                  <p className={s.info}>
                    <Calendar />
                    {publishedAt}
                  </p>
                </div>
                <p className={s.description}>
                  {article.attributes.description}{" "}
                  <Link href={`/noticias/${article.attributes.slug}`}>
                    <a>Ler mais.</a>
                  </Link>
                </p>
              </li>
            );
          })}
        </ul>
        <div className="btn-group">
          <button
            onClick={() => Router.push(`/noticias/?pagina=${props.page - 1}`)}
            disabled={props.page <= 1}
            className="btn btn-square"
          >
            «
          </button>
          {Array.from({ length: props.meta.pagination.pageCount }, (_, i) => (
            <button
              onClick={() => Router.push(`/noticias/?pagina=${i + 1}`)}
              className="btn"
              key={i}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => Router.push(`/noticias/?pagina=${props.page + 1}`)}
            className="btn btn-square"
            disabled={props.page === props.meta.pagination.pageCount}
          >
            »
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Noticias;

export async function getServerSideProps({ query: { pagina = 1 } }) {
  const response = await api.get(
    `/articles?populate=authors&pagination[page]=${pagina}&pagination[pageSize]=6`
  );

  return {
    props: {
      articles: response.data.data,
      meta: response.data.meta,
      page: parseInt(pagina, 10),
    },
  };
}
