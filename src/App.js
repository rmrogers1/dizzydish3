import React, { useState } from 'react'
import dizzyDish from './assets/dizzyDish.png'
import dishes from './assets/dishes'
import './App.scss'

const App = () => {
  const [label, setLabel] = useState('')
  const [spinning, setSpinning] = useState(false)

  if (!dishes) return null

  const letUsFeast = () => {
    setLabel(null)
    setSpinning(true)

    const randomInt = Math.floor(Math.random() * dishes.length)

    // Simulate a delay before stopping the spinning
    setTimeout(() => {
      setSpinning(false)
      setLabel(dishes[randomInt])
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
