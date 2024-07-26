import { AppRoutes } from "../src/util/routes";
import Headers from "../src/page/Header";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Headers />
      <AppRoutes />
    </BrowserRouter>
  );
}
