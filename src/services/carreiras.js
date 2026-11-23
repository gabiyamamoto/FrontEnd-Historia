import {criarRecurso, comExemplo, porNumero} from './api';
import {carreirasExemplo, cursosExemplo} from '@/lib/dadosExemplo';

//Gerencia os dados das profissões relacionadas à História
const carreiras = criarRecurso("/carreiras");

//Gerencia os dados dos cursos técnicos relacionados à História
const historiaCursos = criarRecurso("/historia-cursos");

//Lista as carreiras cadastradas, utlizando dados de exemplo quando necessário.
export async function listarCarreiras() {
    const r = await comExemplo(() => carreiras.listar(), carreirasExemplo);

    return {
        ...r,
        dados: porNumero(r.dados)
    };
}

//Lista os cursos técnicos cadastrados, utilizando dados de exemplo quando necessário.
export async function listarHistoriaCursos() {
    const r = await comExemplo(() => historiaCursos.listar(), cursosExemplo);
    
    return {
        ...r,
        dados: porNumero(r.dados)
    };
}

//Operações de cadastro, atualização e exclusão de carreiras
export const criarCarreira = (dados,token) => carreiras.criar(dados,token);

export const atualizarCarreira = (id,dados,token) => carreiras.atualizar(id,dados,token);

export const excluirCarreira = (id,token) => carreiras.excluir(id,token);

//Operações de cadastro, atualização e exclusão de cursos técnicos.
export const criarHistoriaCurso = (dados,token) => historiaCursos.criar(dados,token);

export const atualizarHistoriaCurso =(id,dados,token) => historiaCursos.atualizar(id,dados,token);

export const excluirHistoriaCurso = (id, token) => historiaCursos.excluir(id,token);