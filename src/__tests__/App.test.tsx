import { render, fireEvent, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the input and submit button', () => {
    render(<App />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })

  it('adds a tag when the form is submitted', () => {
    render(<App />)
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: 'Submit' })
    fireEvent.change(input, { target: { value: 'New tag' } })
    fireEvent.click(button)
    expect(screen.getByText('New tag')).toBeInTheDocument()
    expect(input).toHaveValue('')
    expect(button).toBeDisabled()
  })

  it('button is enabled when the input changes', () => {
    render(<App />)
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: 'Submit' })
    expect(button).toBeDisabled()
    fireEvent.change(input, { target: { value: 'New tag' } })
    expect(button).not.toBeDisabled()
  })
})
