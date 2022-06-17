import { Footer, Header, Hero, Section} from "../components";
import Info from "../components/Info/index"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Section title="Notícias">
      </Section>
      <Section title="O Curso">
        <Info />
      </Section>
      <Footer />
    </>
  );
}
