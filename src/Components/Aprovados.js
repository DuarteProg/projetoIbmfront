import { useState, useEffect } from "react";
import axios from "axios";

export default function Aprovados() {
  const [codCandidato, setCodCandidato] = useState([]);

  useEffect(() => {
    async function effect() {
      try {
        const URL = `http://localhost:8080/api/v1/hiring/approved`;
        const response = await axios.get(URL);
        setCodCandidato(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    effect();
  }, []);

  return (
    <>
    <h1>Candidatos Aprovados:</h1>
    <p>
      {codCandidato.map((candidato) => (
        <span key={candidato.id}>/ {candidato.nome}  </span>
      ))}
    </p>
  </>
  );
}
