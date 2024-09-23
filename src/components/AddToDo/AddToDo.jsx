import { useState } from "react";
import style from "./AddToDo.module.css";

const AddToDo = (props) => {
  const [task, setTask] = useState("");

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    if (task.trim().length === 0) {
      return alert("No puedes agregar una tarea vacia");
    }

    event.preventDefault();
    props.addTask(task);
    setTask("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <div className={style.contenedor}>
      <input
        className={style.input}
        type="text"
        placeholder="Agrega tarea..."
        value={task}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button className={style.button} onClick={handleSubmit}>
        + Agregar
      </button>
    </div>
  );
};

export default AddToDo;
