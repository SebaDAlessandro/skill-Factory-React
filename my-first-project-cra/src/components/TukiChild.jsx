import { useState } from "react";

const TukiChild = (props)=>{
    console.log("algo",props.animals)

    //estados locales
    //const [count, setCount] = useState(0);
    const [info, setInfo] = useState({name:'Seba',age:40});
    const [loading, setLoading] = useState(false);
    const [animals, setAnimals] = useState(['Raccoon']);
    
    //muestra por consola el estado de cada estado
    console.log("Info: ",info)
    console.log("Loading: ", loading)
    console.log("Animals: ",animals)

    //Funcion para incrementar el contador
/*     const increase = ()=>{
        console.log('Sumando con Hook count')
        setCount(count + 1)
    } */

    //Funcion para decrementar el contador
/*     const decrease = ()=>{
        console.log('Restando con Hook count')
        setCount(count - 1)
    } */

    //Funcion que modifica la info de un usuario
    const ChangeInfo = ()=>{
        console.log('Full info con Hook info: ', info)
        setInfo({...info, name:'Sebastián', lastname:'DAlessandro'})
    }

    //Funcion que modifica el estado del loading
    const ChangeLoading = ()=>{
        setLoading(!loading)// <--- setea con lo contario que haya en loading
        //loading? setLoading(false) : setLoading(true);
    }

    //const animalsArray = ['Leon', 'Tigre', 'Pantera', 'Puma', 'Gato']
    //Funcion que adiciona un array de animales a otro array de animales
    const addAnimals = ()=> {
        setAnimals([...animals , ...props.animals])
    }

    return(
        <div className="tukiChild">
            <h1>Soy Child</h1>
            <h2>Soy hijo de Tuki components y nieto de App </h2>
{/*             <h3>Contador: {count}</h3>
           <button onClick={increase}>Tuki! Plus</button> 
            <button onClick={decrease}>Tuki! Subtract</button>*/} 
            <button onClick={ChangeInfo}>Change Info</button>
            <button onClick={ChangeLoading}>Change Loading</button>
            <button onClick={addAnimals}>Add Animals</button>
        </div>
    )
}

export default TukiChild;