import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  // for all of Redux
  const reduxStore = useSelector((store) => store);

  // for one item of store
  const currentCount = useSelector((store) => store.count);

  // access to 'action' of items in store
  const dispatch = useDispatch();

  return (
    <div className="App">
      {/* show redux values on the DOM */}
      {JSON.stringify(reduxStore)}
      <p>The count is {currentCount}!</p>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>Decrease</button>
    </div>
  );
}

export default App;
