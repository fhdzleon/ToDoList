import ToDoItem from "../ToDoItem/ToDoItem";
import style from "./ToDoList.module.css";

const ToDoList = ({ tasks, deleteTask, editTasks, deleteAll }) => {
  return (
    <div className={style.contenedor}>
      {tasks.map((task, index) => (
        <ToDoItem key={task.id} task={task} deleteTask={()=> deleteTask(index)} editTasks={(editedTask) => editTasks(editedTask,task.id)} />
      ))}
      { tasks.length >= 1 && 
      <button className={style.deletAll} onClick={deleteAll} >Limpiar</button>  
     }

    </div>
  );
};

export default ToDoList;
