import TukiComponent from "./components/TukiComponent";


function App() {//<---- esto se llama componente funcional
  return (

/*     el return solo puede renderizar una sola cosa
 */      <div className="App">

        <h1>Hola mundo</h1>
        <h2>React: una genialidad!</h2>

        <TukiComponent/>

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
