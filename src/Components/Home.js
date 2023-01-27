import React, {useState, useEffect}from 'react'
import Form from './Form'
import MealCard from './MealCard'


export default function Home({meals}) {
    

  // console.log(data)


  return (
    <div>
    {meals.map(meal=><MealCard title={meal.title} image={meal.image} key={meal.id} id ={meal.id} />)}
        
    </div>
  )
}




{/* <div className="App">
<Home meals={meals} setMeals={setMeals} />
</div> */}


{/* <Form meals={meals} setMeals={setMeals}/> */}