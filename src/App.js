import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IniciaProcesso from "./Components/IniciaProcesso";
import MarcaEntrevista from "./Components/MarcaEntrevista";
import DesqualificaCandidato from "./Components/DesqualificaCandidato";
import AprovaCandidato from "./Components/AprovaCandidato";
import StatusCandidato from "./Components/StatusCandidato";
import Aprovados from "./Components/Aprovados";

function App() {
  return (
    <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IniciaProcesso />} />
          <Route path="/marca-entrevista" element={<MarcaEntrevista />} />
          <Route
            path="/desqualifica-candidato"
            element={<DesqualificaCandidato />}
          />
          <Route path="/aprova-candidato" element={<AprovaCandidato />} />
          <Route
            path="/status-candidado/:candidatoID"
            element={<StatusCandidato />}
          />
          <Route path="/aprovados" element={<Aprovados />} />
        </Routes>
      </BrowserRouter>
    </header>
  );
}

export default App;
