import { Cinzel , DM_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "date-fns/localizations";
import { clerkConfigurado } from "@/lib/acesso";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-cinzel" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-dm-sans" });

