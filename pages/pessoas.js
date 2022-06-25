import React from "react";
import { Layout, Section, Info, TeacherCard } from "../components";
import { api } from "../services/api";

const Pessoas = (props) => {
  const teachers = props.sections.data[0].attributes.component[0].teachers.data;
  return (
    <Layout seo={props.seo}>
      <Section mt="30px" title="Professores">
        {teachers.map(element => (
          <TeacherCard
            key={element.id}
            info={element.attributes}
          />
        )
        )}
      </Section>
      <Section title={"Administração"}></Section>
    </Layout>
  );
};


export const getStaticProps = async () => {
  const {
    data: {
      data: { attributes: page },
    },
  } = await api.get(
    "/pages/4?populate=seo.meta_tags,sections.component.teachers.image"
  );

  return {
    props: {
      ...page,
    },
    revalidate: 15 * 60, // 15 minutes
  };
};

export default Pessoas;
