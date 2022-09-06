import TukiChild from "./TukiChild";



const TukiComponent = (props)=>{
    console.log("Animals array: ",props)
    //console.log('Ingresando a Tuki Component')
    return(
        <div className="tukiComponent">
            <h1>Ingresando al Tuki Component</h1>
            <h2>Clase picante de React</h2>
            <TukiChild animals={props}/>
           
        </div>
        
    )
}

export default TukiComponent;