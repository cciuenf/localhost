import Head from "next/head";

export const Seo = ({
  meta_title,
  meta_description,
  meta_tags,
  image,
  url,
}) => {
  return (
    <Head>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
      <meta property="og:title" content={meta_title} />
      <meta property="og:description" content={meta_description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <link rel="shortcut icon" href="./favicon.png" />
      {meta_tags.map((tag) => (
        <meta key={tag.name} name={tag.name} content={tag.content} />
      ))}
    </Head>
  );
};

Seo.defaultProps = {
  title: "Ciência da Computação - UENF",
  description: "Website do curso de Ciência da Computação - UENF",
  image: "assets/logo-cc.png",
  url: "https://cc.uenf.br",
};
