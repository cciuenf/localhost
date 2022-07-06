import React from "react";
import { Carousel, DeveloperCard, Layout, Section } from "../components";
import { api } from "../services/api";

const Creditos = (props) => {
  const developerItems = props.developers.map((developer, index) => {
    return <DeveloperCard key={index} info={developer.attributes} />;
  });

  return (
    <Layout seo={props.seo}>
      <Section mt="30px" title="Créditos">
        <Carousel
          items={developerItems}
          responsive={{
            1024: { items: 1 },
          }}
        />
      </Section>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const {
    data: {
      data: { attributes: page },
    },
  } = await api.get("/pages/11?populate=seo.meta_tags");

  const {
    data: { data: developers },
  } = await api.get("/developers?populate=*");

  return {
    props: {
      ...page,
      developers,
    },
    revalidate: 30 * 60, // 30 minutes
  };
};

export default Creditos;
