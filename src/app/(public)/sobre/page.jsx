import ListaIntegrantes from "@/components/sobre/ListaIntegrantes";

export const metadata = { title: "Sobre nós" };

export default function PaginaSobre() {
  return (
    <>
      <section className="container secao sobre-hero">
        <div>
          <p className="sobretitulo">O projeto</p>
          <h1 className="titulo-pagina">Sobre nós</h1>
          <p className="lead" style={{ maxWidth: 620 }}>
            Este portal foi criado por estudantes do SENAI Valinhos como projeto escolar. A proposta é reunir em um só
            lugar conteúdos da disciplina de História — notícias, dicas, vídeos e simulados — de forma acessível e
            confiável.
          </p>
        </div>
        <div className="mvv">
          <div className="bg-vinho"><h3>Missão</h3><p>Aproximar a História do dia a dia dos estudantes.</p></div>
          <div className="bg-ouro"><h3>Visão</h3><p>Ser referência de estudo para a turma.</p></div>
          <div className="bg-turquesa"><h3>Valores</h3><p>Fontes confiáveis, respeito e colaboração.</p></div>
        </div>
      </section>

      <section className="bg-creme-claro secao-borda" style={{ borderBottom: "var(--borda)" }}>
        <div className="container secao">
          <div className="cabecalho-secao">
            <h2 className="titulo-secao">A equipe</h2>
            <small className="texto-suave">Por privacidade, mostramos apenas o primeiro nome e a função de cada integrante.</small>
          </div>
          <ListaIntegrantes />
        </div>
      </section>

      <section className="container secao grade grade-2" style={{ alignItems: "center", gap: 40 }}>
        <div>
          <h2 className="titulo-secao">Como o projeto foi feito</h2>
          <p style={{ marginTop: 14 }}>
            Planejamos as páginas, escolhemos uma identidade visual inspirada na Roma Antiga e desenvolvemos o site com
            Next.js, React e Clerk. As notícias são gerenciadas por um painel administrativo protegido.
          </p>
        </div>
        <div className="cartao bg-tinta" style={{ borderColor: "var(--tinta)" }}>
          <h3 style={{ fontSize: "1.3rem", marginBottom: 10 }}>Fale com a gente</h3>
          <p style={{ margin: 0, fontSize: "0.92rem" }}>
            Sugestões e correções podem ser enviadas pela coordenação do curso no SENAI Valinhos.
          </p>
        </div>
      </section>
    </>
  );
}