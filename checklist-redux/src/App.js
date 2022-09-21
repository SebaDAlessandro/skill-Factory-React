import './App.css';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div>
      <TaskList />
      <TaskForm />
      <Task />
    </div>
  );
}

export default App;
