import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch("http://localhost:3000/login/users", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ user, password }) 
      });
      const data = await response.json(); 

      if (response.ok) {
        navigate("/Home");
      }
       else {
        console.log("Error en la autenticación:", data.error);
      }
    } catch (error) {
      console.log("Error en la solicitud:", error);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto text-black">
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
            name="user"
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Nombre de usuario"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
      </form>

      <p className="my-4 text-sm flex justify-between px-3">
        ¿Quieres crear una cuenta?
        <Link to="/Register" className="text-blue-700 hover:text-blue-900">
          Registrate
        </Link>
      </p>

    </div>
  );
}
