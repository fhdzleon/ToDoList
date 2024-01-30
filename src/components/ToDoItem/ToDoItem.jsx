import { useState } from "react";
import style from "./ToDoItem.module.css"

const ToDoItem = ( { task, deleteTask, editTasks } ) => {

    const [completed, setCompleted] = useState(false);

    const [edit, setEdit] = useState(false);
    const [editedTask, setEditedTask] = useState(task.text);

    const isCompleted = () => {
        setCompleted(true)
    }

    const isEditing = () => {
        setEdit(!edit);
    }

    const handleSave = () => {
        editTasks(editedTask, task.id);
        isEditing();
    }

    const handleInputChange = (event) => {
        setEditedTask(event.target.value)
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          handleSave(event);
        }
      };

    return (
        <>

        {edit ? (
            <section>
            <input type="text" value={editedTask} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
            <button onClick={handleSave}>Actualizar</button>
            </section>
        ) : (

        <section className={completed ? style.completed : style.noCompleted}>
            <span className={style.task}>{ task.text }</span>
            <div className={style.botones}>

            {!completed && <button className={style.button} onClick={isCompleted} >✔</button>}
            {!completed && <button className={style.button} onClick={isEditing}>⌨</button>}
            {!completed && <button className={style.button} onClick={ deleteTask } >❌</button>}
            </div>
            
        </section>

        )}
        
    </>
    )
}   

export default ToDoItem;