import React, {useEffect, useState, } from 'react'
import { useParams, Link } from 'react-router-dom'
import MealCard from './MealCard'

export default function ViewRecipe() {

  const [selectedMeals, setSelectedMeals] = useState({})
  let {id}=useParams()
   
console.log({id})
  useEffect(() => {
    fetch(`http://localhost:3000/meals/${id}`)
      .then(res => res.json())
      .then((data) => setSelectedMeals(data))
  }, [])
  console.log(selectedMeals)
  return (
    <div>
       <img src ={selectedMeals.image}/>
       <h1>{selectedMeals.title}</h1> 
        <p>{selectedMeals.description}</p>
        <p>Ingredients:{selectedMeals.ingredients}</p>
        <Link to={"/"} className="btn btn-primary">
          Back
        </Link>
     </div>
  )
}
