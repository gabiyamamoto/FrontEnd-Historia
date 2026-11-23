import Aviso from "@components/layout/Aviso";
import { listarIntegrantes } from "@services/integrantes";
import { romano } from "@/lib/utils";



export const metada = { title: "Sobre nós"};

const CORES = ["var(--ouro-claro)", "var(--turquesa)", "var(--salvia)", "var(--ouro)", "var(--rosa)"];

export default async function PaginaSobre() {
  const {dados: integrantes, exemplo } = await listarIntegrantes();

  return (
    <>
    <section className="container secao sobre-hero">
      <div>
        <p className="sobretitulo">O projeto</p>
        <h1 className="titulo-pagina">Sobre nós</h1>
        <p className="lead" style={{ maxWidth: 620 }}>
          Este portal foi criado por estudantes do SENAI Valinhos como projeto escolae. A proposta é reunir em um só lugar conteúdos da disciplina de História - notícias, dicas, vídeos e simulados - de forma acessível e confiável.
        </p>
      </div>
      <div className="mvv">
        <div className="bg-vinho">
          <h3>Missão</h3>
          <p>Aproximar a História do dia a dia dos estudantes.</p>
        </div>
        <div className="bg-ouro">
          <h3>Visão</h3>
          <p>Ser referência do estudo para a turma.</p>
        </div>
        <div className="bg-turquesa">
          <h3>Valores</h3>
          <p>Fontes confiáveis, respeito e colaboração</p>
        </div>
      </div>
    </section>

     <section className="bg-creme-claro secao-borda" style={{ borderBottom: "var(--borda)" }}>
        <div className="container secao">
          <div className="cabecalho-secao">
            <h2 className="titulo-secao">A equipe</h2>
            <small className="texto-suave">Por privacidade, mostramos apenas o primeiro nome e a função de cada integrante.</small>
          </div>
          <Aviso ativo={exemplo} />
          {integrantes.length === 0 ? (
            <div className="vazio">Integrantes ainda não cadastrados.</div>
          ) : (
            <div className="grade grade-5">
              {integrantes.map((p, i) => (
                <article key={p.id} className="cartao integrante" style={{ background: "var(--creme)" }}>
                  <div className="medalhao" style={{ background: CORES[i % CORES.length] }}>
                    {p.urlFoto ? <img src={p.urlFoto} alt={`Foto de ${p.nome}`} /> : romano(i + 1)}
                  </div>
                  <h3>{p.nome}</h3>
                  <span className="cargo">{p.cargo}</span>
                  <p>{p.descricaoCargo}</p>
                </article>
              ))}
            </div>
          )}
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