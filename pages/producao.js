import React, { useEffect, useState, useCallback } from "react";
import { Layout, Section, Production } from "../components";
import { api } from "../services/api";
import s from "../components/Production/Production.module.css";
import { FileX, MagnifyingGlass } from "phosphor-react";

const Producao = (props) => {
  const [productions, setProductions] = useState(props.productions);
  const [searchInput, setSearchInput] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");

  const years = [
    ...new Set(props.productions.map((production) => production.publish_year)),
  ].sort();

  const authors = [
    ...new Set(
      props.productions
        .map((production) =>
          production.authors.data.map((author) => author.attributes.name)
        )
        .flat()
    ),
  ].sort();

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSelectYear = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleSelectAuthor = (e) => {
    setSelectedAuthor(e.target.value);
  };

  const filter = useCallback(() => {
    return props.productions
      .filter((production) => {
        return (
          production.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          production.abstract.toLowerCase().includes(searchInput.toLowerCase())
        );
      })
      .filter((production) => {
        return (
          production.publish_year.includes(selectedYear) &&
          production.authors.data.some((author) => {
            return author.attributes.name
              .toLowerCase()
              .includes(selectedAuthor.toLowerCase());
          })
        );
      });
  }, [searchInput, selectedYear, selectedAuthor]);

  useEffect(() => {
    setProductions(filter);
  }, [searchInput, selectedYear, selectedAuthor]);

  return (
    <Layout seo={props.seo}>
      <Section mt="30px" title={props.title}>
        <div className={s.container}>
          <div className={s.header}>
            <div className="relative flex-1">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <MagnifyingGlass className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                onChange={handleSearchInput}
                placeholder="Faça sua busca"
                className="input input-bordered w-full p-4 pl-10"
              />
            </div>

            <select
              className="select select-bordered flex-2"
              onChange={handleSelectYear}
            >
              <option disabled selected>
                Ano
              </option>
              <option value="">Todos os anos</option>
              {years.map((year) => {
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>

            <select
              className="select select-bordered flex-2"
              onChange={handleSelectAuthor}
            >
              <option disabled selected>
                Autor
              </option>
              <option value="">Todos os autores</option>

              {authors.map((author, index) => {
                return <option key={index}>{author}</option>;
              })}
            </select>
          </div>

          {productions.length > 0 ? (
            productions.map((production, index) => (
              <Production
                key={index}
                title={production.title}
                authors={production.authors.data}
                url={production.url}
              >
                {production.abstract}
              </Production>
            ))
          ) : (
            <div className={s.notfound}>
              <FileX />
              <h2>Nenhuma produção encontrada</h2>
            </div>
          )}
        </div>
      </Section>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const {
    data: {
      data: { attributes: page },
    },
  } = await api.get("/pages/6?populate=seo.meta_tags,sections");

  const {
    data: { data },
  } = await api.get("/productions?populate=authors");

  const productions = data.map((document) => document.attributes);

  return {
    props: {
      ...page,
      productions,
    },
  };
};

export default Producao;
