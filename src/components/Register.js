import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    user: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      
      const response = await fetch("https://proy-tel3-prueba.onrender.com/create/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        
      });
      console.log(user)
      if (response.ok) {
        navigate("/"); // Redirige a la página de inicio si el registro es exitoso
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
            Usuario
          </label>
          <input
            type="text"
            id="user"
            value={user.user}
            onChange={(e) => setUser({ ...user, user: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ej_Usuario"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Correo electronico
          </label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="ejemplo@dominio.com"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Clave
          </label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="*************"
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register
        </button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        ¿Ya tienes una cuenta con nosotros?
        <Link to="/login" className="text-blue-700 hover:text-blue-900">
          Ingresa
        </Link>
      </p>
    </div>
  );
}
