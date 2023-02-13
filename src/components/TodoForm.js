import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../redux/actions';
import './TodoForm.css';
function TodoForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(text));
    setText('');
  };
  const onInputChange = (e) => {
    setText(e.target.value);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        placeholder="Enter new todo..."
        className="input"
        onChange={onInputChange}
        value={text}
      ></input>
    </form>
  );
}
export default TodoForm;
