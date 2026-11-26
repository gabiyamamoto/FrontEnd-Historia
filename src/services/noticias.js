import { criarRecurso } from "./api";

const recurso = criarRecurso("/noticias");

export const CATEGORIAS_NOTICIA = [
  "Antiguidade",
  "Idade Média",
  "Idade Moderna",
  "Idade Contemporânea",
  "Brasil Colônia",
  "Brasil Império",
  "Brasil República",
  "História da Tecnologia",
];

export const ordenarPorData = (lista = [], ordem = "desc") => [...lista].sort((a, b) =>
    ordem === "asc" ? new Date(a.data) - new Date(b.data) : new Date(b.data) - new Date(a.data)
  );

//get - noticias?ordem=desc
export async function listarNoticias({ ordem = "desc" } = {}) {
  return ordenarPorData((await recurso.listar({ ordem })) ?? [], ordem);
}

//get - noticias/:id
export const buscarNoticia = (id) => recurso.buscar(id);

// post - noticias (admin)
export const criarNoticia = (dados, token) => recurso.criar(dados, token);

// put - noticias/:id (admin)
export const atualizarNoticia = (id, dados, token) => recurso.atualizar(id, dados, token);

// delete - noticias/:id (admin)
export const excluirNoticia = (id, token) => recurso.excluir(id, token);