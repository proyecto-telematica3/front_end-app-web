import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";

const FirstComponent = () => {
    const [cont, setCont] = useState(0)


    const add = ()=>{
    setCont(cont +1)
  }
    return (
        <>
        <tittle>bienvenido a e-commerce Technology</tittle>
            <h1 >PRODUCTOS</h1>
        <div className="grid grid-cols-2 gap-2 text-center text-balance flex items-center">
            
            
            <Link to="/Crearp" className="bg-black text-white-700 hover:text-blue-900">
            Crear Producto
            </Link>
            <Link to="/Eliminarp" className="bg-black text-white-700 hover:text-blue-900">
            Eliminar Producto
            </Link>


        </div>
        </>
    )
}

export default FirstComponent