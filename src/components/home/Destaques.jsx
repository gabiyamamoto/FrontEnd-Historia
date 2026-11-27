"use client";

import Link from "next/link";
import useApi from "@/lib/useApi";
import {listarQuestoes} from "@/services/questoes";
import { listarCarreiras } from "@/services/carreiras";
import { listarTodasDicas } from "@/services/dicas";
import Icone from "@/components/layout/Icone";

/**
 * Exibe os destaques da página inicial com informações sobre
 * simulados, carreiras e dicas, incluindo as quantidades disponíveis na API.
 */

async function contagens (){
    const [q,c,d] = await Promise.allSettled([listarQuestoes(), listarCarreiras(), listarTodasDicas()]);
     return {
        totalQuestoes: q.status === "fulfilled" ? q.value.length : 0,
        totalCarreiras: c.status === "fulfilled" ? c.value.length : 0,
        totalDicas: d.status === "fulfilled" ? Object.values(d.values).reduce((s,l) => s + l.length, 0): 0,
     }
}
export default function Destaques() {
  const { dados } = useApi(contagens, []);
  const { totalQuestoes = 0, totalCarreiras = 0, totalDicas = 0 } = dados || {};
  const itens = [
    {
      titulo: "Simulado de História",
      texto: `${totalQuestoes ? `${totalQuestoes} questões` : "Questões"} no estilo ENEM, com correção na hora e desempenho final.`,
      link: "/simulado",
      rotulo: "Começar agora",
      icone: "prancheta",
      cor: "var(--vinho)",
      corIcone: "var(--creme-claro)",
    },
    {
      titulo: "Carreiras",
      texto: `${totalCarreiras || "Várias"} profissões ligadas à História e como elas se conectam aos cursos do SENAI Valinhos.`,
      link: "/carreiras",
      rotulo: "Explorar profissões",
      icone: "maleta",
      cor: "var(--ouro)",
    },
    {
      titulo: "Dicas para o vestibular",
      texto: `${totalDicas ? `${totalDicas} dicas` : "Dicas"} sobre como estudar História, temas que mais caem e preparação para ENEM, Fuvest e Unicamp.`,
      link: "/dicas",
      rotulo: "Ver dicas",
      icone: "lampada",
      cor: "var(--turquesa)",
    },
  ];

  return (
    <section className="container secao" style={{ paddingTop: 56 }}>
      <h2 className="titulo-secao" style={{ marginBottom: 24 }}>Destaques</h2>
      <div className="grade grade-3">
        {itens.map((i) => (
          <article key={i.titulo} className="cartao destaque">
            <span className="destaque-icone" style={{ background: i.cor, color: i.corIcone || "var(--tinta)" }}>
              <Icone nome={i.icone} />
            </span>
            <h3>{i.titulo}</h3>
            <p>{i.texto}</p>
            <Link href={i.link} className="link-seta">
              {i.rotulo} →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}