import Head from "next/head";

export const Seo = ({ title, description, image, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <link rel="shortcut icon" href="./favicon.png" />
    </Head>
  );
};

Seo.defaultProps = {
  title: "Ciência da Computação - UENF",
  description: "Website do curso de Ciência da Computação - UENF",
  image: "assets/logo-cc.png",
  url: "https://cc.uenf.br",
};
