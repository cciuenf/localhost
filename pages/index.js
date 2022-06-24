import {
  Layout,
  Hero,
  Section,
  Info,
  Carousel,
  Supporters,
  News,
} from "../components";
import { api } from "../services/api";

const handleDragStart = (e) => e.preventDefault();

export default function Home(props) {
  const sections = props.sections.data.map((section) => section.attributes);

  const supporters = sections[2].component[0].supporters.data.map(
    (supporter) => supporter.attributes
  );

  const articleItems = props.articles.map((article, index) => {
    return (
      <News
        key={index}
        title={article.title}
        link={`/noticias/${article.slug}`}
        img={article.cover_image.data.attributes.url}
        authors={article.authors}
        description={article.description}
        published_at={article.publishedAt}
        onDragStart={handleDragStart}
        role="presentation"
      />
    );
  });

  const articlesLink = {
    href: "/noticias",
    text: "Ver todas as notícias",
  };

  return (
    <Layout seo={props.seo}>
      <Hero />
      <Section title={sections[0].title} rightLink={articlesLink}>
        <Carousel items={articleItems} />
      </Section>
      <Section title={sections[1].title}>
        <Info text={sections[1].description} />
      </Section>
      <Section title={sections[2].title} backgroundColor="#e8e8e8">
        <Supporters supporters={supporters} />
      </Section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const {
    data: {
      data: { attributes: page },
    },
  } = await api.get(
    "/pages/3?populate=seo.meta_tags,sections.component.supporters.logo"
  );

  const {
    data: { data },
  } = await api.get(
    "/articles?populate=cover_image,authors&sort[0]=publishedAt%3Adesc&pagination[page]=1&pagination[pageSize]=5"
  );

  const articles = data.map((article) => article.attributes);

  return {
    props: {
      ...page,
      articles,
    },
    revalidate: 15 * 60, // 15 minutes
  };
};
