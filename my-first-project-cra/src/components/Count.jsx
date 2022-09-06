import { useState } from "react";

const Count = (props)=>{

    console.log(props.animals)
    
    const [count, setCount] = useState(0);

    //Funcion para incrementar el contador
    const increase = ()=>{
        console.log('Sumando con Hook count')
        setCount(count + 1)
    }

    //Funcion para decrementar el contador
    const decrease = ()=>{
        console.log('Restando con Hook count')
        setCount(count - 1)
    }

    return(
    <div className="tukiChild">
        <h1>Soy Child</h1>
         <h3>Contador: {count}</h3>
        <button onClick={increase}>Tuki! Plus</button>
        <button onClick={decrease}>Tuki! Subtract</button>
    </div>
    )
}

export default Count;
