import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DesqualificaCandidato() {
  const [codCandidato, setCodCandidato] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    setCodCandidato(event.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const URL = "http://localhost:8080/api/v1/hiring/disqualify";
      const response = await axios.post(URL, { codCandidato });

      console.log(response.data);
      alert(`Candidato com ID ${codCandidato} foi desclassificado`);
    } catch (error) {
      console.log(error);
      if (error.response.status === 404) {
        setError("Candidato não encontrado ou já foi excluido");
      }
    }
  }

  return (
    <>
      <h1>Deseja Exluir algum candidato?</h1>
      <h2>Digite o codigo do candidato que irá ser desclassificado</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="number" value={codCandidato} onChange={handleChange} />
        <button type="submit">Confirmar</button>
      </form>
    </>
  );
}
