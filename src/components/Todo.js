import { useState } from 'react';
import { toggleTodo, updateTodo, deleteTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';
import './Todo.css';
function Todo({ todo }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.data);
  const dispatch = useDispatch();
  const onFormSubmit = (e) => {
    e.preventDefault();
    setEditing((prevState) => !prevState);
    dispatch(updateTodo(todo._id, text));
  };
  return (
    <div className="listed-task">
      <li
        className="task"
        style={{
          textDecoration: todo.done ? 'line-through' : '',
          color: todo.done ? '#bdc3c7' : '#34495e',
        }}
      >
        <span style={{ display: editing ? 'none' : '' }}>{todo.data}</span>
        <form
          style={{ display: editing ? 'inline' : 'none' }}
          onSubmit={onFormSubmit}
        >
          <input
            type="text"
            value={text}
            className="edit-todo"
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        <span
          className="icon"
          onClick={() => setEditing((prevstate) => !prevstate)}
        >
          <i className="material-icons">create</i>
        </span>
        <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
          <i className="material-icons">delete_forever</i>
        </span>
        <span
          style={{ display: editing ? 'none' : '' }}
          className="icon"
          onClick={() => dispatch(toggleTodo(todo._id))}
        >
          <i className="material-icons">done_all</i>
        </span>
      </li>
    </div>
  );
}
export default Todo;
