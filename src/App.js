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
  const [spinning, setSpinning] = useState(false)

  if (!foodArray) return null

  const letUsFeast = () => {
    setLabel(null)
    setSpinning(true)
    const randomInt = Math.floor(Math.random() * foodArray.length)

    // Simulate a delay before stopping the spinning
    setTimeout(() => {
      setSpinning(false)
      setLabel(foodArray[randomInt])
    }, 3000) // Adjust the delay as needed
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Dizzy Dish</h1>
      </header>
      {/* whats for dinner */}
      <div className='App-food-label'>{label}</div>
      {/* spin the spinner */}
      <img
        className={`App-spinner ${spinning ? 'spin' : ''}`}
        src={dizzyDish}
        alt='spinner'
      />
      {/* clicky button */}
      <button
        type='button'
        variant='outlined'
        onClick={() => letUsFeast()}
        className='App-button'
        disabled={spinning} // Disable the button while spinning
      >
        What Should We Eat?
      </button>
    </div>
  )
}

export default App
