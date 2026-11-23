import { requisicao } from "./api";

export const listarIntegrantes = async () => (await requisicao("/integrantes")) ?? [];

export const atualizarIntegrante = (id, dados, token) =>
  requisicao(`/integrantes/${id}`, { metodo: "PUT", corpo: dados, token });