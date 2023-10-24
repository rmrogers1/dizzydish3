import { render, screen } from '@testing-library/react'
import App from './App'

describe('App tests', () => {
  it('should render header with "Dizzy Dish" title', () => {
    render(<App />)
    const headerElement = screen.getByText(/Dizzy Dish/i)
    expect(headerElement).toBeInTheDocument()
  })

  it('should render DizzyDishSpinner component', () => {
    render(<App />)
    const spinnerElement = screen.getByAltText(/spinner/i)
    expect(spinnerElement).toBeInTheDocument()
  })

  it('should render "What Should We Eat?" button', () => {
    render(<App />)
    const buttonElement = screen.getByText(/What Should We Eat?/i)
    expect(buttonElement).toBeInTheDocument()
  })
})
