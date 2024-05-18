import { useState } from "react"

const SecondComponent = () => {
    const [cont, setCont] = useState(0)

    const add = ()=>{
    setCont(cont + 1)
  }
    return (
        <>
            <h1>e-commerce Technology</h1>
            
        </>
    )
}

export default SecondComponent