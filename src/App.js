import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import React, {useState, useEffect} from 'react';

function App() {
  const [meals, setMeals] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/meals")
    .then (res => res.json())
    .then((data)=>setMeals(data))
  }, [])
  return (
    <div className="App">
          <Home meals={meals} setMeals={setMeals}/>
    </div>
  );
}

export default App;
