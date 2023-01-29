import React, {useState, useEffect}from 'react'

import MealCard from './MealCard'


export default function Home({meals}) {
    

  // console.log(data)


  return (
    <div id="card-content" className='row g-3'>
    {meals.map(meal=><MealCard title={meal.title} image={meal.image} key={meal.id} id ={meal.id} />)}
        
    </div>
  )
}







