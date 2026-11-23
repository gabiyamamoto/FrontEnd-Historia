import Link from "next/link";
import AvisoExemplo from "@/components/layout/AvisoExemplo";
import CursosTecnicos from "@/components/carreiras/CursosTecnicos";
import { listarHistoriaCursos } from "@/services/carreiras";

export const metadata = { title: "História nos cursos técnicos" };

export default async function PaginasCursosTecnicos() {
    const { dados, exemplo } = await listarHistoriaCursos();

    return (
        <>
            <section className="bg-tinta">
                <div className="container hero-pagina">
                    <p className="sobretitulo" style={{ color: "var(--ouro)" }}>
                        História + Senai Valinhos
                    </p>
                    <h1 className="titulo-pagina claro">História nos cursos técnicos</h1>
                    <p className="lead">
                        Toda tecnologia tem uma história. Veja como os conteúdos da disciplina se conectam com cada curso técnico do Senai Valinhos.
                    </p>
                </div>
                <div className="faixa faixa-onda" />
            </section>

            <section className="container secao">
                <AvisoExemplo ativo={exemplo} />
                <CursosTecnicos cursos={dados} />
                <div style={{ display: "flex", flexWrap: "wrap", marginTop: 32 }}>
                    <Link href="/carreiras" className="btn">
                        Ver carreiras
                    </Link>
                    <Link href="/estagio" className="btn btn-primario">
                        Como conseguir um estágio
                    </Link>
                </div>
            </section>
        </>
    );
}