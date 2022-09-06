import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, initial}) => {

    //console.log("Stock: ",Stock)
  
    const [count, setCount] = useState(initial)

    //Funcion para incrementar el contador
    const increase = ()=>{
        console.log('Sumando con Hook count')
        count < stock && setCount(count + 1)
    }

    //Funcion para decrementar el contador
    const decrease = ()=>{
        console.log('Restando con Hook count')
        count > 1 && setCount(count - 1)
    }
  
    return (
        <div>
            <h3>Productos: {count}</h3>
            <h3>Stock: {stock}</h3>
            <button onClick={increase}>Tuki! Plus</button>
            <button onClick={decrease}>Tuki! Subtract</button>
        </div>
    )
}

export default ItemCount