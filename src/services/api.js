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
        
    }

)