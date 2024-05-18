import { useState, useEffect } from "react"
import FirstComponent from "./FirstComponent"
import { useAuth } from "../context/authContext";


export function Home() {

    const {user} = useAuth()
    console.log(user)

    const [products, setProducts] = useState([])
    useEffect(() => {
        console.log("Ejecutandose")
        //consumo de la api de leer productos
        fetch('https://proy-tel3-prueba.onrender.com/products', {
        //fetch('http://localhost:3000/products', {
        method: "GET"
        }).then(response => response.json()
        .then(data => setProducts(data))
        .catch(err => console.log(err))
        )
        .catch(errorResponse => console.log(errorResponse))
    }, [])

    return (
        <h1>
        <h2 className="text-center">Bienvenido a e-commerce Technology</h2>
        <h2 className="text-center">Catalogo de productos</h2>
        <div className="grid grid-cols-3 gap-2 border-double w-500 bg-white aspect-square text-black text-center text-balance flex items-center">
            {products.map(producto => (
            <div key={producto.name} className="fondo">
            <h3>Nombre: {producto.name}</h3>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Precio: {producto.precio}</p>
            </div>  
        ))
        }
        
        </div> 
        <div className=" text-center text-balance flex items-center">
        <FirstComponent></FirstComponent>
        </div>
        </h1>
    );
    
}

