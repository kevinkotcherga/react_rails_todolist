import TodoList from './components/TodoList';
import './App.css';
import React, {useEffect} from 'react'

function App() {

  useEffect(() => {
    fetch('api/todos')
    .then(res => res.json())
    .then(data => console.log(data))
  }, []);

 return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
