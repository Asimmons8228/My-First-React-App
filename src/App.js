import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';

const todos = [
  'Have Fun',
  'Learn React',
  'Learn the MERN-Stack'
];

function Heading(){
  return <h1>React To-Do</h1>;
}
function App() {
  return (
  <div className='App'>
    <Heading />
    <ToDoList todos = {todos}/>
  </div> 
  );
}

export default App ;
