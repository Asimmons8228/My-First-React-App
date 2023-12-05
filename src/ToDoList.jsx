import ToDoListItem from "./ToDoListItem";
import "./ToDoListItem.css"

function ToDoList({todos}) {
    return(
        <ul className="padding-none">
            {todos.map((t, idx) => (
            <ToDoListItem todo ={t} key={idx} />
            ))}
        </ul>
    );
}


export default ToDoList