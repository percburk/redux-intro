import { useDispatch } from 'react-redux';
import { useState } from 'react';

function ElementForm() {
  // use state for local input to send to redux
  const [newElement, setNewElement] = useState('');
  
  // access to 'action' of items in store
  const dispatch = useDispatch();

  // form submit to send a new element to redux reducer
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newElement);
    dispatch({ type: 'ADD_ELEMENT', payload: newElement });
    setNewElement('');
  };

  return (
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
  );
}

export default ElementForm;
