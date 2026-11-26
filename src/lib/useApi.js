"use client";

import { useCallback, useEffect, useState } from "react";

//faz consulta a API e retorna dados de carregamento, erros e recarga...
export default function useApi(consulta, deps = []) {
  const [estado, setEstado] = useState({
    dados: null,
    carregando: true,
    erro: null,
  });
  const [versao, setVersao] = useState(0);

  useEffect(() => {
    let ativo = true;
    setEstado((e) => ({ ...e, carregando: true, erro: null }));
    consulta()
      .then(
        (dados) => ativo && setEstado({ dados, carregando: false, erro: null }),
      )
      .catch(
        (erro) => ativo && setEstado({ dados: null, carregando: false, erro }),
      );
    return () => {
      ativo = false;
    };
  }, [...deps, versao]);

  const recarregar = useCallback(() => setVersao((v) => v + 1), []);
  const definirDados = useCallback(
    (fn) =>
      setEstado((e) => ({
        ...e,
        dados: typeof fn === "function" ? fn(e.dados) : fn,
      })),
    [],
  );

  return { ...estado, recarregar, definirDados };
}
