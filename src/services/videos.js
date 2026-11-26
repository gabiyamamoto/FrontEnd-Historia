import { criarRecurso } from "./api";

const recurso = criarRecurso("/videos");

export const listarVideos = async () => (await recurso.listar()) ?? [];

export const buscarVideo = (id) => recurso.buscar(id);

export const criarVideo = (dados, token) => recruso.criar(dados, token);

export const atualizarVideo = (id, dados, token) =>
  recurso.atualizar(id, dados, token);

export const excluirVideo = (id, token) => recurso.excluir(id, token);

//converte links do youtube para URL
export function urlIncorporavel(url = "") {
  try {
    const u = new URL(url);
    let id = null;
    if (u.hostname.includes("youtu.be")) id = u.pathname.slice(1);
    else if (u.pathname.startsWith("/embed/")) return url;
    else if (u.pathname.startsWith("/shorts/")) id = u.pathname.split("/")[2];
    else id = u.searchParams.get("v");
    return id ? `https://www.youtube-nocookie.com/embed/${id}` : url;
  } catch {
    return null;
  }
}
