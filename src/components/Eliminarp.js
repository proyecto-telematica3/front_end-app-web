import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export function Eliminarp() {
  const navigate = useNavigate();

  const [productId, setProductId] = useState("");

  const [error, setError] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    setError("");
    try {
      
      const response = await fetch(`https://proy-tel3-prueba.onrender.com/products/delete/${productId}`, {
        method: "DELETE",
      });
      console.log(productId)
      if (response.ok) {
        navigate("/Home"); // Redirige a la página de inicio si la eliminación es exitosa
      } else {
        const contentType = response.headers.get("content-type");
        let errorMessage = `Error en la solicitud: ${response.status} ${response.statusText}`;

        if (contentType && contentType.includes("application/json")) {
          const data = await response.json(); // Obtén el mensaje de error desde el backend
          errorMessage += ` - ${data.error}`;
        } else {
          const text = await response.text();
          errorMessage += ` - ${text}`;
        }

        setError(errorMessage);
      }
    } catch (error) {
      setError("Error en la solicitud: " + error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto text-black">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleDelete}
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
            id="productsId"
            value={productId}
            onChange={(e) => setProductId(e.target.value )}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ej_Producto"
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Eliminar
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