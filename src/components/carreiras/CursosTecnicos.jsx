const CORES = ["bg-turquesa", "bg-salvia", "bg-ouro", "bg-terracota"];

//Exibe os cursos técnicos relacionados à História
export default function CursosTecnicos({ cursos =[]}) {
    if (cursos.length === 0) {
        return (
            <div className="vazio" style={{color:"var(--tinta)"}}>
                Nenhum curso cadastrado.
            </div>
        );
    }

    return (
        <div className="grade grade-3">
            {cursos.map((c, i) => (
                <article key={c.id} 
                className={`cartao ${CORES[i % CORES.length]}`}>
                    <small>CURSO TÉCNICO {c.numero}</small>
                    <h3>{c.nome}</h3>
                    <p>{c.descricao}</p>
                </article>
            ))} 
        </div>
    );
}