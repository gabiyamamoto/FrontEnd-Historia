import { requisicao, comExemplo } from "./api";
import { integrantes } from "@/lib/dadosExemplo";

export const listarIntegrantes = () => comExemplo(() => requisicao("/integrantes"), integrantes);

export const atualizarIntegrante = (id, dados, token) => requisicao(`integrantes/${id}`, {metodo: "PUT", corpo: dados, token });