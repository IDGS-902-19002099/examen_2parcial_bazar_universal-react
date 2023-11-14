import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage.jsx";
import HomePage from "./components/HomePage.jsx";
import Buscar_Producto from "./components/Buscar_Producto.jsx";
import Detalle_Producto from "./components/Detalle_Producto.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<Buscar_Producto />} />
        <Route path="/item/:id" element={<Detalle_Producto />} />
        <Route path="/*" element={<NotFoundPage></NotFoundPage>} />
      </Routes>
    </Router>
  );
};

export default App;
