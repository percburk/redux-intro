import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function App() {
  // for all of Redux
  const reduxStore = useSelector((store) => store);

  // for one item of store
  const currentCount = useSelector((store) => store.count);

  // access to 'action' of items in store
  const dispatch = useDispatch();

  const [newElement, setNewElement] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newElement);
    dispatch({ type: 'ADD_ELEMENT', payload: newElement });
    setNewElement('');
  };

  return (
    <div className="App">
      {/* show redux values on the DOM */}
      {JSON.stringify(reduxStore)}
      <p>The count is {currentCount}!</p>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>Decrease</button>
      <form onSubmit={handleSubmit}>
        <label>Element Name:</label>
        <input
          type="text"
          placeholder="Element Name"
          onChange={(event) => setNewElement(event.target.value)}
          value={newElement}
        />
        <button type="submit">Add Element</button>
      </form>
    </div>
  );
}

export default App;
