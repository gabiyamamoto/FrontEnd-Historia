import Link from "next/link";
import ArteHero from "@/components/home/ArteHero";
import Civilizacoes from "@/components/home/Civilizacoes";
import Periodos from "@/components/home/Periodos";
import Destaques from "@/components/home/Destaques";
import NoticiasRecentes from "@/components/home/NoticiasRecentes";
import ChamadaVestibular from "@/components/home/ChamadaVestibular";
import Icone from "@/components/layout/Icone";

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div>
          <p className="sobretitulo">Disciplina de História · SENAI Valinhos</p>
          <h1>Entender o passado para construir o futuro</h1>
          <p className="lead">
            Notícias, dicas de estudo, simulados e vídeos para aprender História
            de um jeito conectado com o presente, com a sua carreira e com o
            vestibular.
          </p>
          <div className="hero-acoes">
            <Link href="/noticias" className="btn btn-primario">
              Ler as notícias <Icone nome="seta" tamanho={16} />
            </Link>
            <Link href="/simulado" className="btn">
              Fazer o simulado
            </Link>
          </div>
        </div>
        <figure style={{ margin: 0 }}>
          <div className="hero-arte">
            <ArteHero />
          </div>
          <figcaption className="hero-legenda">
            Ilustração original inspirada na cerâmica grega de figuras negras
          </figcaption>
        </figure>
      </section>

      <Civilizacoes />
      <Periodos />
      <Destaques />
      <NoticiasRecentes />
      <ChamadaVestibular />
    </>
  );
}
