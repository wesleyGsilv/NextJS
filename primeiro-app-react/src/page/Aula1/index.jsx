import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import LoadApi from "../../util/loader-api";

export default function Aula1() {
  const [faqs, setPosts] = useState([]);
  const [faqCat, setFaqCat] = useState([]);
  const [faqsCatGroup, setFaqCatGroup] = useState([]);

  /*
  Resumo
    Execução após renderização: O useEffect executa a função de efeito após a renderização do componente.

    Dependências: O array de dependências controla quando o efeito deve ser executado.

    Limpeza: A função retornada pelo useEffect é usada para limpar efeitos anteriores.
    
    O useEffect é uma ferramenta poderosa para gerenciar efeitos colaterais em componentes funcionais do React, permitindo um controle preciso sobre como e quando esses efeitos ocorrem.
  */
  useEffect(() => {
    const loadAllData = async () => {
      const fetchData = async (url, setter) => {
        let page = 1;
        let allData = [];
        let responseData = [];

        do {
          try {
            const response = await fetch(`${url}?per_page=100&page=${page}`);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            responseData = await response.json();
            if (Array.isArray(responseData)) {
              allData = [...allData, ...responseData];
              page++;
            } else {
              responseData = [];
            }
          } catch (error) {
            console.error("Error fetching data:", error);
            responseData = [];
          }
        } while (responseData.length > 0);

        setter(allData);
      };

      await fetchData(
        "https://hml.komuh.com/renova/transparencia/wp-json/wp/v2/faq",
        setPosts
      );
      await fetchData(
        "https://hml.komuh.com/renova/transparencia/wp-json/wp/v2/faq_cat",
        setFaqCat
      );
    };

    loadAllData();
  }, []);

  useEffect(() => {
    const faqsCats = faqCat.map((cat) => {
      const filteredFaqs = faqs.filter((faq) => faq.faq_cat.includes(cat.id));
      return {
        id: cat.id,
        name: cat.name,
        faqs: filteredFaqs,
      };
    });
    setFaqCatGroup(faqsCats);
  }, [faqs, faqCat]);

  console.log(faqs);

  return (
    <div>
      
      <h2>FAQs por Categoria</h2>
      {faqsCatGroup.map((cat) => (
        <div key={cat.id}>
          <h3>{cat.name}</h3>
          {cat.faqs.map((faq) => (
            <div key={faq.id}>
              <details>
                <summary>{faq.title.rendered}</summary>
                <div
                  dangerouslySetInnerHTML={{ __html: faq.content.rendered }}
                />
              </details>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
