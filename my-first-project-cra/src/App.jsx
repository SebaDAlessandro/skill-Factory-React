import TukiComponent from "./components/TukiComponent";
import Count from "./components/Count"
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


const App = ()=>{//<---- esto se llama componente funcional

  //IMPORTANTE: en esta parte se coloca la logica del componente
  
  //console.log('Ingresando a App')
  //const animalsArray = ['Leon', 'Tigre', 'Pantera', 'Puma', 'Gato']
  
  return (
    
    //el return solo puede renderizar una sola cosa
    
    <div className="App">
      <NavBar />
      <ItemListContainer 
        nameEcommerce="Tienda Ficticia"
      />

{/*         <TukiComponent
          animals={animalsArray}
        />
        <Count 
          id={1}
          stock={10}
          initial={1}
          userName='Seba'
          /> */}

      </div>

  );
}

export default App;

/*

si se exporta así, se debe inportar: import { App } from .....

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
