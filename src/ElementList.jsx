import { useSelector } from 'react-redux';

function ElementList() {
  const elementList = useSelector((state) => state.elementList);

  return (
    <ul>
      {elementList.map((element, i) => {
        return <li key={i}>{element}</li>;
      })}
    </ul>
  );
}

export default ElementList;