import {
  Layout,
  Hero,
  Section,
  Info,
  Carousel,
  Supporters,
} from "../components";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <main>
        <Section title="Notícias">
          <Carousel />
        </Section>
        <Section title="O Curso">
          <Info />
        </Section>
        <Section title="Apoiadores" backgroundColor="#e8e8e8">
          <Supporters />
        </Section>
      </main>
    </Layout>
  );
}
