import Link from "next/link";
import CursosTecnicos from "@/components/carreiras/CursosTecnicos";

export const metadata = { title: "História nos cursos técnicos" };

export default function PaginaCursosTecnicos() {
  return (
    <>
      <section className="bg-tinta">
        <div className="container hero-pagina">
          <p className="sobretitulo" style={{ color: "var(--ouro)" }}>História + SENAI Valinhos</p>
          <h1 className="titulo-pagina claro">História nos cursos técnicos</h1>
          <p className="lead">
            Toda tecnologia tem uma história. Veja como os conteúdos da disciplina se conectam com cada curso técnico
            do SENAI Valinhos.
          </p>
        </div>
        <div className="faixa faixa-onda" />
      </section>
      <section className="container secao">
        <CursosTecnicos />
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 32 }}>
          <Link href="/carreiras" className="btn">Ver carreiras</Link>
          <Link href="/estagio" className="btn btn-primario">Como conseguir um estágio</Link>
        </div>
      </section>
    </>
  );
}