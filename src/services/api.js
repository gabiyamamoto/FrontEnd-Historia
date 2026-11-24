export const API_URL = (
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"
).replace(/\/$/, "");

const MENSAGEM_POR_STATUS = {
  400: "Dados inválidos",
  401: "Você precisa estar autenticado.",
  403: "Você não tem permissão para esta ação.",
  404: "Informação não encontrada.",
  409: "Conflito de dados.",
  500: "Erro interno no servidor.",
};

export class ApiError extends Error {
    constructor(mensagem, status = 0, dados = null) {
        super(mensagem);
        this.name = "ApiError";
        this.status = status;
        this.dados = dados;
    }
}

export async function requisicao(rota, { metodo = "GET", corpo, token, params, timeout = 8000 } = {}) {
    const url = new URL(`${API_URL}${rota}`);
    if (params) {
        Object.entries(params).forEach(([chave, valor]) => {
            if (valor !== undefined && valor !== null) {
                url.searchParams.append(chave, valor);
            }
        });
    }

    const headers = { Accept: "application/json" };
    if (corpo !== undefined) headers["Content-Type"] = "application/json";
    if (token) headers["Authorization"] = `Bearer ${token}`;

    let resposta;

    try {
        resposta = await fetch(url, {
            method: metodo,
            headers,
            body: corpo !== undefined ? JSON.stringify(corpo) : undefined,
            cache: "no-store",
            signal: AbortSignal.timeout(timeout),
        });
    } catch (erro) {
        throw new ApiError("Não foi possível conectar à API.", 0);
    }
        
    if (resposta.status === 204) {
        return null;
    }

    const json = await resposta.json().catch(() => null);

    if (!resposta.ok || json?.sucesso === false) {
        throw new ApiError(
            json?.mensagem || MENSAGEM_POR_STATUS[resposta.status] || "Erro desconhecido",
            resposta.status,
            json?.dados || null
        );
    }

    return json && typeof json === "object" && "dados" in json ? json.dados : json;
}

export function criarRecurso(rota) {
  return {
    listar: (params) => requisicao(rota, { params }),
    buscar: (id) => requisicao(`${rota}/${id}`),
    criar: (dados, token) => requisicao(rota, { metodo: "POST", corpo: dados, token }),
    atualizar: (id, dados, token) => requisicao(`${rota}/${id}`, { metodo: "PUT", corpo: dados, token }),
    excluir: (id, token) => requisicao(`${rota}/${id}`, { metodo: "DELETE", token }),
  };
}

export const porNumero = (lista = []) => lista.sort((a, b) => (a.numero || 0) - (b.numero || 0));