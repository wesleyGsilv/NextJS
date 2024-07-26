import { Routes, Route } from "react-router-dom";
import Aula1 from "../page/Aula1";
import Aula2 from "../page/Aula2";
import Erro from "../page/Erro";
export function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Aula1 />} />
      <Route exact path="/aula2" element={<Aula2 />} />
      // Quando for necesario utilizar um pagina 404 usar * no path.
      <Route path="*" element={<Erro />} />
    </Routes>
  );
}
