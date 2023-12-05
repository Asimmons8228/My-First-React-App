import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';
import { useState } from "react"




export default function App() {
 const [todos, setTodos] = useState([
  'Have Fun',
  'Learn React',
  'Learn the MERN-Stack'
 ]);

 const [showTodos, setShowTodos] = useState(true)

return (
  <div className='App'>
    <h1>React To-Do</h1>
    {showTodos && <ToDoList todos = {todos}/>}
  </div> 
  );
}
