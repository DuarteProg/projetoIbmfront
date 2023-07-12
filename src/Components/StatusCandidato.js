import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function StatusCandidato() {
  const [codCandidato, setCodCandidato] = useState(0);
  const { candidatoID } = useParams();

  useEffect(() => {
    async function effect() {
      try {
        const URL = `http://localhost:8080/api/v1/hiring/status/candidate/${candidatoID}`;
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
      <p>Candidato do código: {candidatoID}</p>
      {codCandidato}
    </>
  );
}
