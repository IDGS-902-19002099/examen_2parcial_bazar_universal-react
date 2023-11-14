import "./HomePage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const HomePage = () => {
  // Estado para almacenar el valor del campo de búsqueda
  const [name, setName] = useState("");

  // Hook de navegación para redirigir a otras páginas despúes de la búsqueda
  const navigate = useNavigate();

  // Función para manejar el cambio en el campo de búsqueda
  const handleChange = (event) => {
    setName(event.target.value);
  };

  // Función para manejar la acción de búsqueda
  const handleSearch = () => {
    // Redirige a la página de resultados de búsqueda de productos con el valor del campo de búsqueda
    navigate(`/items?q=${name}`);
    console.log(name);
  };

  return (
    <div className="contenedor">
      <br />
      <br />
      <img
        className="imagen-logo"
        src="https://static.vecteezy.com/system/resources/previews/012/494/061/original/shopping-bag-icon-with-transparent-background-png.png"
        alt=""
      />
      <br />
      <h1>Bazar Online</h1>
      <br />
      <div className="input-group">
        <span className="input-group-text span">🔎</span>
        <input
          className=" form-control input"
          type="text"
          id="searchInput"
          placeholder="         Buscar productos..."
          value={name}
          onChange={handleChange}
        />
      </div>
      <br />
      <button className="btn btn-md btn-info" onClick={handleSearch}>
        Buscar
      </button>
      <br />
      <div></div>
    </div>
  );
};

export default HomePage;
