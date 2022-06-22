import React from "react";
import { Layout, Section, Document } from "../components";
import { api } from "../services/api";

const Documentos = (props) => {
  return (
    <Layout seo={props.seo}>
      <Section title={props.title}>
        {props.documents.map((document, index) => (
          <Document
            key={index}
            title={document.title}
            urlDownloadAll={"url de download todos os anexos"}
            attachments={[
              { title: "Titulo", url: "url" },
              { title: "Titulo", url: "url" },
            ]}
          >
            {document.description}
          </Document>
        ))}
      </Section>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const {
    data: {
      data: { attributes: page },
    },
  } = await api.get("/pages/5?populate=seo.meta_tags,sections");

  const {
    data: { data },
  } = await api.get("/documents?populate=attachments");

  const documents = data.map((document) => document.attributes);

  return {
    props: {
      ...page,
      documents,
    },
  };
};

export default Documentos;
