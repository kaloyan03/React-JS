import './ListTodo.css';

function ListTodo({
    todo,
    onDelete,
    onDone,
}) {
    return (
        <li>
            {todo.text}
            <button onClick={() => onDelete(todo.id)} className='btn todo-item-delete-btn'>
                X   
            </button>
            <button onClick={(event) => onDone(event, todo.id)} className={!todo.isDone ? 'btn todo-item-not-done-btn': 'btn todo-item-done-btn'}>
                Done
            </button>
        </li>
    );

}

export default ListTodo;