import Image from "next/image";
import Link from "next/link";
import { Users, Calendar, ArrowLeft, ArrowRight } from "phosphor-react";
import React, { useEffect } from "react";
import { Layout } from "../../components/Layout";
import { api } from "../../services/api";
import Disqus from "disqus-react";

import s from "../../styles/News.module.css";

const Noticia = (props) => {
  const [previousArticle, setPreviousArticle] = React.useState(null);
  const [nextArticle, setNextArticle] = React.useState(null);

  const html = {
    __html: props.article.attributes.content,
  };

  const disqusShortname = "cc-uenf";
  const disqusConfig = {
    url: `https://cc.uenf.br/noticias/${props.article.attributes.slug}`,
    identifier: props.article.attributes.slug,
    title: props.article.attributes.title,
  };

  const authors = props.article.attributes.authors.data
    .map((author) => author.attributes.name)
    .join(", ");

  const publishedAt = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
  }).format(new Date(props.article.attributes.publishedAt));

  const { cover_image } = props.article.attributes;

  useEffect(() => {
    api
      .get(`/articles/${props.article.id - 1}`)
      .then((response) => setPreviousArticle(response?.data))
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setNextArticle(null);
        }
      });

    api
      .get(`/articles/${props.article.id + 1}`)
      .then((response) => setNextArticle(response?.data))
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setNextArticle(null);
        }
      });
  }, [props.article.id]);

  return (
    <Layout>
      <div className={"wrapper " + s.container}>
        <div className={s.title}>
          <h1>{props.article.attributes.title}</h1>
        </div>
        <hr className={s.line} />
        <div className={s.meta}>
          <div className={s.info}>
            <Users />
            <span>{authors}</span>
          </div>
          <div className={s.info}>
            <Calendar />
            <span>{publishedAt}</span>
          </div>
        </div>
        <hr className={s.line} />
        <div className={s.cover}>
          <Image
            src={cover_image.data.attributes.url}
            alt={props.title}
            width={300}
            height={400}
          ></Image>
          <div className={s.content} dangerouslySetInnerHTML={html}></div>
        </div>
        <hr className={s.line} />
        <div className={s.button}>
          {nextArticle && (
            <div className={s.next}>
              <div className={s.indicator}>
                <ArrowLeft />
                Próximo
              </div>
              <div>
                <Link href={`/noticias/${nextArticle.data.attributes.slug}`}>
                  <a>{nextArticle.data.attributes.title}</a>
                </Link>
              </div>
            </div>
          )}
          {previousArticle && (
            <div className={s.previous}>
              <div className={s.indicator}>
                Anterior
                <ArrowRight />
              </div>
              <div>
                <Link
                  href={`/noticias/${previousArticle.data.attributes.slug}`}
                >
                  <a>{previousArticle.data.attributes.title}</a>
                </Link>
              </div>
            </div>
          )}
        </div>
        <hr className={s.line} />
        <div className={s.thread}>
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Noticia;

export const getStaticPaths = async () => {
  const {
    data: { data: articles },
  } = await api.get("/articles");

  const paths = articles.map((article) => ({
    params: { slug: article.attributes.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const {
    data: { data: article },
  } = await api.get(
    `/slugify/slugs/article/${slug}?populate=cover_image,authors`
  );

  return {
    props: {
      article,
    },
  };
};
