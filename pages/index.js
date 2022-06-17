import { Footer, Header, Hero, Section, Info, Carousel} from "../components";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Section title="Notícias">
        <Carousel />
      </Section>
      <Section title="O Curso">
        <Info />
      </Section>
      <Footer />
    </Layout>
  );
}
