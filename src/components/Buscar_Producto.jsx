import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./Buscar_Producto.css";

const Buscar_Producto = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/items?q=${name}`);
    console.log(name);
  };

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const searchTerm = queryParams.get("q");

  const [products, setProducts] = useState([]);
  const rating = 4;

  const searchProduct = async () => {
    try {
      const response = await axios.get(
        `https://bazaruniversal246.onrender.com/api/items/q?name=${searchTerm}`
      );
      setProducts(response.data.productos); // Update this line
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      searchProduct();
    }
  }, [searchTerm]);

  return (
    <>
      <div className="contenedor">
        <div className="search-container2">
          <div className="input-group">
            <img
              className="logo"
              src="https://static.vecteezy.com/system/resources/previews/012/494/061/original/shopping-bag-icon-with-transparent-background-png.png"
              alt=""
            />
            <span
              type="button"
              className="input-group-text span botonBuscar"
              onClick={handleSearch}
            >
              🔎
            </span>
            <input
              className="form-control input"
              type="text"
              id="searchInput"
              placeholder="Buscar productos..."
              value={name}
              onChange={handleChange}
            />
          </div>
        </div>

        <hr />
        <div className="resultados">
          {products && products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="card1">
                <div className="contenedor-card">
                  <div className="divImagen">
                    <img
                      src={product.images[0]}
                      alt=""
                      className="cardImagen"
                    />
                  </div>
                  <div className="divDetalles">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <div className="rating">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FontAwesomeIcon
                          icon={faStar}
                          key={index}
                          className={index < rating ? "star-filled" : ""}
                        />
                      ))}
                    </div>
                    <Link to={`/item/${product.id}`}>Ver detalles</Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No se encontraron productos.</p>
          )}
        </div>
        <br />
      </div>
    </>
  );
};

export default Buscar_Producto;
