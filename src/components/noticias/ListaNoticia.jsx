"use client";

import { useMemo, useState } from "react";
import { useSeachParams } from "next/navigation";
import CardNoticia from "./CardNoticia";
import Icone from "@/components/layout/Icone";
import EstadoApi from "@/components/layout/EstadoApi";
import useApi from "@/lib/useApi";
import { listarNoticias } from "@/services/noticias";

const FILTROS = [
  { rotulo: "Todas", teste: () => true },
  { rotulo: "Antiguidade", teste: (c) => c === "Antiguidade" },
  { rotulo: "Idade Média", teste: (c) => c === "Idade Média" },
  { rotulo: "Idade Moderna", teste: (c) => c === "Idade Moderna" },
  { rotulo: "Contemporânea", teste: (c) => /contempor/i.test(c) },
  { rotulo: "Brasil", teste: (c) => /^brasil/i.test(c) },
];

