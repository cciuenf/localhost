import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Layout, Production, Tabs } from "../../components/";
import { api } from "../../services/api";

import s from "../../components/Document/Document.module.css";

const Professor = (props) => {
  const html = {
    __html: props.teacher.attributes.short_bio,
  };

  const subjects = props.teacher.attributes.subjects.data;

  return (
    <Layout>
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

            {html.__html && (
              <>
                <p className="font-semibold mt-3">Biografia:</p>
                <div dangerouslySetInnerHTML={html}></div>
              </>
            )}
          </div>
        </div>
        <div className="p-4 bg-slate-500 text-white text-center w-1/2 my-6 mx-auto rounded-md">
          <p>
            Áreas de Pesquisa:{" "}
            <span>{props.teacher.attributes.research_areas}</span>
          </p>
        </div>

        <Tabs title="Projetos">
          {props.projects.length > 0 &&
            props.projects.map((project) => {
              const html = {
                __html: project.attributes.description,
              };

              const publishYear = new Intl.DateTimeFormat("pt-BR", {
                dateStyle: "long",
              }).format(new Date(project.attributes.publish_year));

              return (
                <div
                  className="border-gray-300 border rounded-lg p-5"
                  key={project.id}
                >
                  <h3>{project.attributes.name}</h3>
                  <p>
                    <span className="font-semibold">Data de Início:</span>{" "}
                    {publishYear}
                  </p>

                  <p className="font-semibold mt-3">Descrição:</p>
                  <div dangerouslySetInnerHTML={html}></div>
                </div>
              );
            })}

          {props.projects.length === 0 && (
            <div className="p-1">
              <p>Não há nada para exibir.</p>
            </div>
          )}
        </Tabs>
        <Tabs title="Produções">
          {props.productions.length > 0 &&
            props.productions.map((production) => {
              const production_html = {
                __html: production.attributes.abstract,
              };

              return (
                <Production
                  key={production.id}
                  title={production.attributes.title}
                  authors={production.attributes.authors.data}
                >
                  <div dangerouslySetInnerHTML={production_html}></div>
                </Production>
              );
            })}

          {props.productions.length === 0 && (
            <div className="p-1">
              <p>Não há nada para exibir.</p>
            </div>
          )}
        </Tabs>
        <Tabs title="Materiais">
          {subjects.map((subject) => {
            const html = {
              __html: subject.attributes.description,
            };

            const materials = subject.attributes.materials.data;

            return (
              <div
                key={subject.id}
                tabIndex="0"
                className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
              >
                <div className="collapse-title text-xl font-medium">
                  {subject.attributes.name}
                </div>
                <div className="collapse-content">
                  <div className={s.content}>
                    <div className={s.item}>
                      <h3>Descrição</h3>
                      {!html.__html && <p>Não há nada para exibir.</p>}
                      <div dangerouslySetInnerHTML={html}></div>
                    </div>
                    <div className={s.item}>
                      <h3>Anexos</h3>
                      <ul>
                        {materials.length > 0 &&
                          materials.map((material, index) => {
                            const { name } = material.attributes;
                            const attachments =
                              material.attributes.attachments.data;
                            return (
                              <li key={index}>
                                <h4 className="text-lg">{name}</h4>
                                {attachments.map((attachment, index) => {
                                  const { name } = attachment.attributes;
                                  const { url } =
                                    attachment.attributes.file.data[0]
                                      .attributes;
                                  return (
                                    <a
                                      key={index}
                                      target="_blank"
                                      href={url}
                                      rel="noopener noreferrer"
                                    >
                                      {name}
                                    </a>
                                  );
                                })}
                              </li>
                            );
                          })}
                        {materials.length === 0 && (
                          <p>Não há nada para exibir.</p>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Tabs>
        <Tabs title="Contato">
          <div>
            <p>
              <span className="font-semibold">Endereço:</span> Av. Alberto
              Lamego, 2000 - Parque Califórnia, {props.teacher.attributes.room}
            </p>
            <p>
              <span className="font-semibold">E-mail:</span>{" "}
              {props.teacher.attributes.email}
            </p>
            {props.teacher.attributes.phone && (
              <p>
                <span className="font-semibold">Telefone:</span>{" "}
                {props.teacher.attributes.phone}
              </p>
            )}
          </div>
        </Tabs>
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
  } = await api.get(
    `/teachers/?filters[website_url][$eq]=${slug}&populate=image,subjects.materials.attachments.file`
  );

  const {
    data: { data: projects },
  } = await api.get(
    `/projects/?filters[authors][name][$eq]=${teacher[0].attributes.name}`
  );

  const {
    data: { data: productions },
  } = await api.get(
    `/productions/?filters[authors][name][$eq]=${teacher[0].attributes.name}&populate=*`
  );

  return {
    props: {
      teacher: teacher[0],
      projects,
      productions,
    },
  };
};
