import './ListTodo.css';

function ListTodo({
    todo,
    onDelete,
    onDone,
}) {
    return (
        <li className={todo.isDone ? 'todo-item-done' : ''}>
            {todo.text}
            <button onClick={() => onDelete(todo.id)} className='btn todo-item-delete-btn'>
                X   
            </button>
            <button onClick={() => onDone(todo.id)} className={!todo.isDone ? 'btn todo-item-not-done-btn': 'btn todo-item-done-btn'}>
                {!todo.isDone
                ? 'Done'
                : 'Not Done'
                }
             </button>

            {/* {
            todo.isDone
            ? <button onClick={(event) => onDone(event, todo.id)} className={!todo.isDone ? 'btn todo-item-not-done-btn': 'btn todo-item-done-btn'}>Not Done</button>
            : <button onClick={(event) => onDone(event, todo.id)} className={!todo.isDone ? 'btn todo-item-not-done-btn': 'btn todo-item-done-btn'}>Done</button>
        } */}
        </li>
    );

}

export default ListTodo;