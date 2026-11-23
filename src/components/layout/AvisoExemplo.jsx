export default function AvisoExemplo({ ativo = false }) {
    if (!ativo) {
        return null;
    }

    return (
        <p className="aviso-exemplo">
            Conteúdo de demonstração exibido enquanto o backend não está disponível.
        </p>
    );
}
