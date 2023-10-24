import React, { useState } from 'react'
import dizzyDish from './assets/dizzyDish.png'
import './App.scss'

// we should setup a simple api call, that would return a random number of items, but we always have this as a failsafe
const foodArray = [
  'Pizza',
  'Sushi',
  'Burgers',
  'Thai',
  'Tacos',
  'Pancakes',
  'Tequila',
  'Worth Wild',
]

const App = () => {
  const [label, setLabel] = useState('')

  if (!foodArray) return null

  const letUsFeast = () => {
    const randomInt = Math.floor(Math.random() * foodArray.length)
    setLabel(foodArray[randomInt])
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Dizzy Dish</h1>
      </header>
      {label && <div className='App-food-label'>{label}</div>}
      <div className='App-content'>
        <img className='App-spinner' src={dizzyDish} alt='spinner' />
      </div>

      <button
        type='button'
        variant='outlined'
        onClick={() => letUsFeast()}
        className='App-button'
      >
        What Should We Eat?
      </button>
    </div>
  )
}

export default App
