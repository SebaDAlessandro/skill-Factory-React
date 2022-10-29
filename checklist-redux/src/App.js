import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<TaskList />}/>
        <Route path='/create-task' element={ <TaskForm />}/>
        <Route path='/edit-task/:id' element={ <TaskForm />}/>
      </Routes>
    </div>
  );
}

export default App;
