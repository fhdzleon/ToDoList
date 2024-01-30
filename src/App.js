import './App.css';
import Header from './components/Header/Header';
import AddToDo from './components/AddToDo/AddToDo';
import { useState } from 'react';
import ToDoList from './components/ToDoList/ToDoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([]);


  const generateId = () => {
    return uuidv4();
  }

  const addTask = (newTask) => {
    const newTaskId = { id: generateId(), text: newTask}
    setTasks([...tasks, newTaskId]);
  }

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  const editTasks = (editedTask, id) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return{...task, text: editedTask}
      }
      return task;
    }) 
    setTasks(newTasks)
  }

  const deleteAll = () => {
    setTasks([]);
  }
  
  return (
    <div className="App">
      <Header />
      <AddToDo addTask={addTask} />
      <ToDoList tasks={tasks} deleteTask={deleteTask} editTasks={editTasks} deleteAll={deleteAll}/>
    </div>
  );
}

export default App;
