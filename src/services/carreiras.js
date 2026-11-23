import { carreirasExemplo, cursosExemplo } from "@/lib/dadosExemplo";

export async function listarCarreiras() {
    return {
        dados: carreirasExemplo,
        exemplo: true,
    };
}

export async function listarHistoriaCursos() {
    return {
        dados: cursosExemplo,
        exemplo: true,
    };
}