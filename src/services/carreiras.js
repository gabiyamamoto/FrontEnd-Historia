import {criarRecurso, porNumero} from "./api";

//Gerencia as profissões relacionadas à História.
const carreiras = criarRecurso("/carreiras");

//Gerencia os cursos técnicos relacionados à  História.
const historiaCursos = criarRecurso("/historia-cursos");

//Lista as carreiras cadastradas ordem numérica.
export const listarCarreiras = async() => porNumero(await carreiras.listar());

//Listar os cursos técnicos cadastrados em ordem numérica.
export const listarHistoriaCursos = async() => porNumero(await historiaCursos.listar());

// Operações de cadastro, atualização e exclusão de carreiras.
export const criarCarreira = (dados, token) =>
    carreiras.criar(dados, token);

export const atualizarCarreira = (id, dados, token) =>
    carreiras.atualizar(id, dados, token);

export const excluirCarreira = (id, token) =>
    carreiras.excluir(id, token);

// Operações de cadastro, atualização e exclusão de cursos técnicos.
export const criarHistoriaCurso = (dados, token) =>
    historiaCursos.criar(dados, token);

export const atualizarHistoriaCurso = (id, dados, token) =>
    historiaCursos.atualizar(id, dados, token);

export const excluirHistoriaCurso = (id, token) =>
    historiaCursos.excluir(id, token);