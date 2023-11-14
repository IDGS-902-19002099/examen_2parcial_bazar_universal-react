import { useEffect, useState } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./Detalle_Producto.css";

const Detalle_Producto = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); // Extract the id parameter from the URL

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/items?q=${name}`);
    console.log(name);
  };

  const [product, setProduct] = useState(null);
  const rating = 4;

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://bazaruniversal246.onrender.com/api/item/${id}`
      );
      setProduct(response.data); // Assuming the API response is an object representing the product
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <>
      <div className="contenedor">
        <div className="search-container">
          <div className="input-group">
            <img
              className="logo"
              src="https://static.vecteezy.com/system/resources/previews/012/494/061/original/shopping-bag-icon-with-transparent-background-png.png"
              alt=""
            />

            <span className="input-group-text span botonBuscar">🔎</span>
            <input
              className="form-control input"
              type="text"
              id="searchInput"
              placeholder="Buscar productos..."
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        {product ? (
          <div className="div2">
            <div className=" contenedor-img">
              {product.images.map((image, index) => (
                <div key={index} className={`div1`}>
                  <img
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    className="card-image"
                  />
                </div>
              ))}
            </div>
            <br />
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
          </div>
        ) : (
          <p>Loading product...</p>
        )}
      </div>
      <br />
    </>
  );
};

export default Detalle_Producto;
