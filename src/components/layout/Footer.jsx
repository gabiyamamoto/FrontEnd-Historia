import Link from "next/link";
import { LINKS } from "@/lib/navegacao";

const CORES = [
  "--vinho",
  "--ouro",
  "--creme-claro",
  "--salvia",
  "--turquesa",
  "--terracota",
];

export default function Footer() {
  //Divide os links em duas colunas
  const metade = Math.ceil(LINKS.length / 2);

  return (
    <footer>
      <div className="faixa-onda" />
      <div className="rodape">
        <div className="container">
          <div className="rodape-grade">
            <div>
              <h2>HISTÓRIA</h2>
              <p>
                Portal educativo da disciplina de História, desenvolvido por
                estudantes do SENAI Valinhos. Projeto escolar, sem fins
                comerciais.
              </p>
            </div>

            {/*Organiza os links em duas colunas */}
            {[LINKS.slice(0, metade), LINKS.slice(metade)].map((grupo, i) => (
              <ul key={i}>
                {grupo.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}> {link.rotulo}</Link>
                  </li>
                ))}
              </ul>
            ))}

            <div>
              <span
                className="subtitulo"
                style={{ color: "var(--ouro-claro)" }}
              >
                Paleta Roma
              </span>

              <div className="paleta" aria-hidden="true">
                {CORES.map((cor, i) => (
                  <span
                    key={cor}
                    style={{
                      background: `var(${cor})`,
                      borderColor:
                        i === 0 ? "var(--creme-claro)" : "transparent",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="rodape-base">
            <span>
              © {new Date().getFullYear()} · Projeto da turma [TURMA] — SENAI
              Valinhos
            </span>
            <span>
              Imagens e vídeos utilizados com autorização ou licença livre
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
