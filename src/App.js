import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Form from './Components/Form';
import ViewRecipe from './Components/ViewRecipe';
import NavBar from './Components/NavBar';

function App() {
  
  const [meals, setMeals] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/meals")
      .then(res => res.json())
      .then((data) => setMeals(data))
  }, [])
  return (
    
    <BrowserRouter>
      <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home meals = {meals}  />} />
          <Route path="/form" element={<Form meals={meals} setMeals={setMeals} />}/>
          <Route path="/recipe/:id" element={<ViewRecipe />} />
        </Routes>
        
      </div>
    </BrowserRouter>


  );
}

export default App;


{/* <div className="App">
<Home meals={meals} setMeals={setMeals}/>
</div> */}