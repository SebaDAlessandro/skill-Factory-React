import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Product } from './components/Product';
import { CreateProduct } from './components/CreateProduct'
import { UpdateProducts } from './components/UpdateProducts'

function App() {
  return (
    <div className="App">
      <Link to='/'><h1>Productos with firebase</h1></Link>
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/create' element={<CreateProduct />} />
        <Route path='/update/:id' element={<UpdateProducts />} />
      </Routes>
    </div>
  );
}

export default App;
