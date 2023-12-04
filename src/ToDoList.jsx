import ToDoListItem from "./ToDoListItem";

function ToDoList({todos}) {
    const toDoListItems = todos.map( t => <ToDoListItem />)
        return(
        <ul>
            {todos.map((t,idx) => (
            <ToDoListItem todo ={t} key={idx}/>
            ))}
        </ul>
    );
}


export default ToDoList