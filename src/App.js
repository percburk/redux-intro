import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import ElementList from './ElementList';
import ElementForm from './ElementForm';

function App() {
  // for all of Redux
  const reduxStore = useSelector((store) => store);

  const dispatch = useDispatch();
  // for one item of store
  const currentCount = useSelector((store) => store.count);

  return (
    <div className="App">
      {/* show redux values on the DOM */}
      {JSON.stringify(reduxStore)}
      <p>The count is {currentCount}!</p>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>Decrease</button>
      <ElementForm />
      <ElementList />
    </div>
  );
}

export default App;
