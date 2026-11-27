"use client";

import useApi from "@/lib/useApi";
import EstadoApi from "@/components/layout/EstadoApi";
import { listarHistoriaCursos } from "@/services/carreiras";

const CORES = ["bg-turquesa", "bg-salvia", "bg-ouro","bg-terracota"];

/** Exibe a lista de cursos técnicos relacionados à história. */
export default function CursosTecnicos() {
  const api = useApi(() => listarHistoriaCursos(), []);
  return (
    <EstadoApi api={api} vazio="Nenhum curso cadastrado ainda." escuro>
      {(cursos) => (
        <div className="grade grade-3">
          {cursos.map((c, i) => (
            <article key={c.id} className={`curso-card ${CORES[i % CORES.length]}`}>
              <small>CURSO TÉCNICO {c.numero}</small>
              <h3>{c.nome}</h3>
              <p>{c.descricao}</p>
            </article>
          ))}
        </div>
      )}
    </EstadoApi>
  );
}