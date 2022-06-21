import { Info } from "phosphor-react";
import React from "react";
import { Layout, Section, Wrapper, TeacherCard } from "../components";
import { api } from "../services/api";

const Pessoas = (props) => {
    const sections = props.sections.data.map((section) => section.attributes);


    return (
        <Layout seo={props.seo}>
            <Wrapper>
                <Section title={sections[0].title}>
                    <TeacherCard />
                </Section>
                <Section title={sections[1].title}>
                    <Info text={sections[1].description} />
                </Section>
            </Wrapper>
        </Layout>
    )
};


export const getStaticProps = async () => {
    const {
        data: {
            data: { attributes: page },
        },
    } = await api.get(
        "/pages/4?populate=seo.meta_tags,sections"
    );

    return {
        props: {
            ...page,
        },
        revalidate: 60 * 60, // 60 minutes
    };
};


export default Pessoas