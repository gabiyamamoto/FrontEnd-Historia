"use client"

import Icone from "./Icone";

// Exibe uma mensagem enquanto os dados estão carregando, informa caso ocorra algum erro (com opção de tentar novamente) ou mostra quando não há dados. Quando a API retorna os dados, exibe o conteúdo normalmente.

export default function EstadoApi({ api, vazio = "Nenhum conteúdo cadastrado ainda.", children, escuro = false }) {
const cor = escuro ? { color: "var(--tinta)" } : undefined;

//Mostra uma mensagem enquanto os dados estão carregando
if (api.carregando) {
    return (
        <div className="estado-api" aria-busy="true" style={cor}>
            <span className="girando" aria-hidden>Carregando...</span>
        </div>
    );
}

//Mostra o erro e deixa tentar carregar os dados dnv
if (api.erro) {
    const semConexao = api.erro.status === 0;
    return (
        <div className="vazio" role="alert" style={cor}>
            <Icone nome="info" tamanho={22}/>
            <p style={{ margin: "8px 0 14px" }}>
                <strong> {semConexao ? "Não foi possível conectar ao servidor." : api.erro.message} </strong>
                {semConexao && (
                    <span className="texto-suave" style={{ display: "block", fontSize: "0.85rem" }}>
                        Verifique se a API está no ar e se <code>NEXT_PUBLIC_API_URL</code> está correta.
                    </span>
                )}
            </p>
            <button className="botao" onClick={api.recarregar}>Tentar novamente</button>
        </div>
    );
}

const dados = api.dados;
const estaVazio = dados === null || (Array.isArray(dados) && dados.length === 0);
if (estaVazio && vazio) return <div className="vazio" style={cor}> {vazio} </div>

//Entrega os dados para o componente que chamou EstadoApi
return children(dados);

}