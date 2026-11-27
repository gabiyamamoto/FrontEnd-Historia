import { exportTraceState } from "next/dist/trace";
import { criarRecurso, porNumero } from "./api";

// Recursos de carreiras e cursos técnicos
const carreiras = criarRecurso("/carreiras");
const  historiaCursos = criarRecurso("/historia-cursos");

//Listagem de ordem númerica
export const listarCarreiras = async () => porNumero(await carreiras.listar());
export const listarHistoriaCursos = async () => porNumero(await historiaCursos.listar());

//Operações de cursos técnicos
export const criarCarreira = (dados,token) => carreiras.criar(dados,token);
export const atualizarCarreira =(id, dados, token) => carreiras.atualizar(id,dados,token);
export const excluirCarreira =(id, token) => carreiras.excluir(id,token);

//Operações de cursos técnicos
export const criarHistoriaCurso = (dados,token) => historiaCursos.criar(dados, token);
export const atualizarHistoriaCurso =(id, dados, token) => historiaCursos.atualizar(id,dados, token);
export const excluirHistoriaCurso = (id, token) => historiaCursos.excluir(id,token);