import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AprovaCandidato() {
  const [codCandidato, setCodCandidato] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    setCodCandidato(event.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const URL = "http://localhost:8080/api/v1/hiring/approve";
      await axios.post(URL, { codCandidato });

      alert(`Candidado com codigo ${codCandidato} foi aprovado!`);
      navigate("/aprovados");
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        setError("Candidato não está na fase de qualificados");
      }
      if (error.response.status === 404) {
        setError("Candidato não encontrado");
      }
    }
  }

  return (
    <>
      <h1>Terceira Fase: Aprovar</h1>
      <h2>Digite o codigo do candidato que irá para lista de aprovados</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="number" value={codCandidato} onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
