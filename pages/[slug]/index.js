import Image from "next/image";
import React from "react";
import { Layout, Tabs } from "../../components/";
import { api } from "../../services/api";

const Professor = (props) => {
  return (
    <Layout>
      {/* <pre>{JSON.stringify(props.teacher, null, 2)}</pre> */}
      <div className="container my-10">
        <div className="flex justify-center items-center gap-10">
          <Image
            className="rounded-full object-cover"
            src={props.teacher.attributes.image.data.attributes.url}
            alt={props.teacher.attributes.name}
            width={250}
            height={250}
          />

          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">
              {props.teacher.attributes.name}
            </h1>
            <h2 className="text-xl">{props.teacher.attributes.subtitle}</h2>
            <p>{props.teacher.attributes.graduation}</p>
            <p>{props.teacher.attributes.email}</p>
            <div className="card-actions justify-end">
              <a
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                href={props.teacher.attributes.lattes_url}
              >
                Lattes
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-1 justify-center p-4 bg-slate-500 text-white w-1/2 my-6 mx-auto rounded-md">
          <p>Áreas de Pesquisa:</p>
          <span>
            AI, Deep Learning, Machine Learning, Data Science, Big Data.
          </span>
        </div>

        <Tabs title="Materiais"></Tabs>
        <Tabs title="Produções" />
        <Tabs title="Contato"></Tabs>
      </div>
    </Layout>
  );
};

export default Professor;

export const getStaticPaths = async () => {
  const {
    data: {
      data: {
        attributes: { pages },
      },
    },
  } = await api.get("/teachers-page?populate=*");

  const paths = pages.data.map((page) => ({
    params: { slug: page.attributes.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const {
    data: { data: teacher },
  } = await api.get(`/teachers/?filters[website_url][$eq]=${slug}&populate=*`);

  return {
    props: {
      teacher: teacher[0],
    },
  };
};
