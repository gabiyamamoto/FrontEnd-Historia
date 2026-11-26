import { criarRecurso, porNumero } from "./api";

export const TIPOS_DICA = {
  "como-estudar": { titulo: "Como estudar", cor: "turquesa" },
  aprendizagem: { titulo: "Aprendizagem", cor: "salvia" },
  vestibulares: { titulo: "Vestibulares", cor: "ouro" },
};

const recursos = Object.fromEntries(
  Object.keys(TIPOS_DICA).map((tipo) => [tipo, criarRecurso(`/dicas/${tipo}`)]),
);

//get - dicas/:tipo
export const listarDicas = async (tipo) =>
  porNumero((await recursos[tipo].listar()) ?? []);

//busca as 3 listas em paralelo e retorna um objeto com as 3 listas
export async function listarTodasDicas() {
  const tipos = Object.keys(TIPOS_DICA);
  const listas = await Promise.all(tipos.map(listarDicas));
  return Object.fromEntries(tipos.map((tipo, i) => [tipo, listas[i]]));
}

export const criarDica = (tipo, dados, token) => recursos[tipo].criar(dados, token);
export const atualizarDica = (tipo, id, dados, token) => recursos[tipo].atualizar(id, dados, token);
export const excluirDica = (tipo, id, token) => recursos[tipo].excluir(id, token);