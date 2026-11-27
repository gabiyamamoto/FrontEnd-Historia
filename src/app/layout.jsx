import { Cinzel , DM_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "date-fns/locale";
import { clerkConfigurado } from "@/lib/acesso";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-cinzel" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-dm-sans" });

export const metadata = {
    title: {
        default: "História  - Portal da disciplina - SENAI Valinhos",
        template: "%s - História SENAI Valinhos",
    },
    description: "Notícias, dicas de estudo, simulados e vídeos para aprender História de um jeito conectado com o presente, com a sua carreira e com o vestibular.",
};

const aparenciaClerk = {
    variables: {
        colorPrimary: "#9a0a2e",
        colorBackground: "fef7e4",
        colorText: "#2a1612",
        colorInputBackground: "#fdf0cf",
        borderRadius: "6px",
        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
    },
};

export default function RootLayout({ children }) {
  const html = (
    <html lang="pt-BR" className={`${cinzel.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
  
  if (!clerkConfigurado) return html;

  return (
    <ClerkProvider localization={ptBR} appearance={aparenciaClerk}>
        {html}
    </ClerkProvider>
  );
}