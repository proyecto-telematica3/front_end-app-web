import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export function Crearp() {
  const navigate = useNavigate();

  const [products, setProducts] = useState({
    name: "",
    cantidad: "",
    precio: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      
      const response = await fetch("https://proy-tel3-prueba.onrender.com/create/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
        
      });
      console.log(products)
      if (response.ok) {
        navigate("/Home"); // Redirige a la página de inicio si el registro es exitoso
      } else {
        const data = await response.json(); // Obtén el mensaje de error desde el backend
        setError(data.error);
      }
    } catch (error) {
      setError("Error en la solicitud: " + error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto text-black">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="user"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nombre
          </label>
          <input
            type="text"
            id="products"
            value={products.name}
            onChange={(e) => setProducts({ ...products, name: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ej_Producto"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Cantidad
          </label>
          <input
            type="text"
            id="cantidad"
            value={products.cantidad}
            onChange={(e) => setProducts({ ...products, cantidad: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="un numero"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="precio"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Precio
          </label>
          <input
            type="text"
            id="precio"
            value={products.precio}
            onChange={(e) => setProducts({ ...products, precio: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="valor"
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Crear
        </button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        ¿Ya tienes una cuenta con nosotros?
        <Link to="/home" className="text-blue-700 hover:text-blue-900">
          Regresar
        </Link>
      </p>
    </div>
  );
}


//////////////////////////////////////////////////
/*import { useState, useEffect } from "react"

const Crearp = () => {
    return (
      <div>
        {/* contenido del componente *//*}
      </div>
    );
  };
  
  export default Crearp;*/