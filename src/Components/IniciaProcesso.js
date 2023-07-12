import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function IniciaProcesso() {
  const [nome, setNome] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    setNome(event.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const URL = "http://localhost:8080/api/v1/hiring/start";
      await axios.post(URL, { nome });

      alert(`Candidato ${nome} adicionado!`);
      navigate("/marca-entrevista");
    } catch (error) {
      if (error.response.status === 409) {
        setError("O candidato já iniciou o processo, favor usar outro nome");
      }
    }
  }

  return (
    <>
      <div className="separador">
        <Link to={`/desqualifica-candidato`}>
          <h3>Clique aqui para desqualificar candidato</h3>{" "}
        </Link>{" "}
      </div>
      <h1>Fase Inicial</h1>
      <h2>Digite o nome do candidato que irá para fase de entrevista</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" value={nome} onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
