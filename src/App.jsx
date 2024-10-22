
import { useState } from 'react'
import './App.css'
import Recipes from './components/Recipes/Recipes'

import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [recipeQueue, setQueue] = useState([])
  const [prepareRecipe, setRecipe] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)
  const handleAddQueue = (recipe) => {
    console.log('cliked me', recipe);
    const isExists = recipeQueue.find(previous => previous.id === recipe.id)
    if(!isExists){
      setQueue([...recipeQueue, recipe])
    }else{
      alert('cannot add copy item')
    }
  }
  const handleRemove = id => {
    const deletedRecipe = recipeQueue.find(recipe => recipe.id === id)
    // remove want to cook table 
    const updateQueue = recipeQueue.filter(recipe => recipe.id !== id);
    setQueue(updateQueue)
    setRecipe([...prepareRecipe, deletedRecipe])
  }
  const calculateTimeAndCalries = (time, calories) => {
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calories)

  }
  

  return (
    <>
     
     <section className='flex flex-col w-11/12 mx-auto md:flex-row'>
      {/* cards section */}
      <Recipes handleAddQueue = {handleAddQueue}></Recipes>
      <Sidebar recipeQueue = {recipeQueue} handleRemove = {handleRemove} prepareRecipe = {prepareRecipe} calculateTimeAndCalries = {calculateTimeAndCalries} totalTime = {totalTime} totalCalories = {totalCalories} ></Sidebar>
      {/* sidebar */}
     </section>
      
     
    </>
  )
}

export default App
