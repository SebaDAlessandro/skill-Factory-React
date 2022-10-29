import logo from './logo.svg';
import './App.css';
//import { useState } from 'react' //<--- lo descamoentamos para usar el estado global
import { useSelector, useDispatch} from 'react-redux'

import { increment,decrement,incrementByAmount } from './app/slices/counter/counterSlice.js'

function App() {

  //const [count, setCount]=useState(0) // <--- estado local... lo comentamos para usar el esado global

  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          count is: {counter}
        </p>
        <p>
          <button type="button" onClick={()=>dispatch(increment())}>
            Increment
          </button>
          <button type="button" onClick={()=>dispatch(decrement())}>
            Decrement
          </button>
          <button type="button" onClick={()=>dispatch(incrementByAmount(2))}>
            Increment by 2
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
