import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function MarcaEntrevista() {
  const [codCandidato, setCodCandidato] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    setCodCandidato(event.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const URL = "http://localhost:8080/api/v1/hiring/schedule";
      await axios.post(URL, { codCandidato });

      alert(`Marcada a entrevista do candidato com código ${codCandidato}`);
      navigate("/aprova-candidato");
    } catch (error) {
      console.log(error);
      if (error.response.status === 404) {
        setError("Candidato não encontrado");
      }
      if (error.response.status === 400) {
        setError("Candidato não está na fase de entrevista ");
      }
    }
  }

  return (
    <>
      <h1>Segunda Fase: Entrevista</h1>
      <h2>Digite o codigo do candidato que irá para lista de qualificados</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="number" value={codCandidato} onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
