import './App.css';
import TaskList from './components/TaskList';
import Logo from './components/Logo';

function App() {
  return (
    <div className='app__container'>
      <Logo />
      <TaskList />
    </div>
  );
}

export default App;
