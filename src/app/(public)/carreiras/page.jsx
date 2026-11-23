import Link from "next/link";
import AvisoExemplo from "@/components/layout/AvisoExemplo";
import CursosTecnicos from "@/components/carreiras/CursosTecnicos";
import { listarCarreiras, listarHistoriaCursos } from "@/services/carreiras";
import { romano } from "@/lib/utils";

export const metadata = {title: "Carreiras"};

const CORES = ["var(--ouro-claro)", "var(--ouro)", "var(--turquesa)", "var(--salvia)", "var(--terracota)", "var(--creme-claro)"];

export default async function PaginasCarreiras() {
    const [carreiras, cursos] = await Promise.all([listarCarreiras(), listarHistoriaCursos()]);

    return (
        <>
            <section className="bg-ouro">
                <div
                    className="container hero-pagina"
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 30,
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <p className="sobretitulo" style={{ color: "var(--tinta)" }}>
                            Profissões e caminhos
                        </p>
                        <h1 className="titulo-pagina" style={{ color: "var(--tinta)" }}>
                            Carreiras
                        </h1>
                        <p className="lead">
                            Quem estuda História trabalha com memória, pesquisa e comunicação - em escolas, museus, arquivos, empresas e no mundo digital.
                        </p>
                    </div>
                    <div className="cartao caixa-formacao">
                        <strong>FORMAÇÃO BASE</strong>
                        <span style={{ fontSize: "0.88rem" }}>
                            Licenciatura (para dar aulas) ou bacharelado (para pesquisa, arquivos e museus) em História.
                        </span>
                    </div>
                </div>
                <div className="faixa faixa-onda" />
            </section>

            <section className="container secao">
                <AvisoExemplo ativo={carreiras.exemplo || cursos.exemplo} />
                <h2 className="titulo-secao" style={{ marginBottom: 26 }}>
                    Profissões ligadas à História
                </h2>
                {carreiras.dados.length === 0 ? (
                    <p>Nenhuma carreira encontrada.</p>
                ) : (
                    <div className="grade grade-3">
                        {carreiras.dados.map((c, i) => (
                            <article key={c.id} className="cartao carreira">
                                <span
                                    className="numero-romano"
                                    style={{
                                        background: CORES[i % CORES.length],
                                        color: i % CORES.length === 4 ? "var(--creme-claro)" : undefined,
                                    }}
                                >
                                    {romano(c.numero)}
                                </span>
                                <h3>{c.titulo}</h3>
                                <p>{c.descricao}</p>
                                <strong>ONDE ATUA</strong>
                                <p>{c.ondeAtua}</p>
                            </article>
                        ))}
                    </div>
                )}
            </section>

            <section className="bg-tinta">
                <div className="container secao">
                    <p className="sobretitulo" style={{ color: "var(--ouro)" }}>
                        História + SENAI Valinhos
                    </p>
                    <h2 className="titulo-secao claro" style={{ color: "var(--ouro)" }}>
                        Como a História entra nos cursos técnicos
                    </h2>
                    <p className="lead" style={{ marginBottom: 26 }}>
                        Toda tecnologia tem uma história. Conhecer esse passado ajuda a entender o mercado de trabalho e as mudanças que estão por vir.
                    </p>
                    <CursosTecnicos cursos={cursos.dados} />
                    <p style={{ marginTop: 22 }}>
                        <Link
                            href="/cursos-tecnicos"
                            className="link-seta"
                            style={{ color: "var(--ouro)" }}
                        >
                            Ver a página dos cursos técnicos →
                        </Link>
                    </p>
                </div>
            </section>
        </>
    );
}