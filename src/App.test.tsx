import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App.tsx'

describe('App', () => {
  it('toont de titel Storydice als hoofdtitel', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Storydice' })).toBeInTheDocument()
  })

  it('toont één zin uitleg onder de titel', () => {
    render(<App />)
    expect(screen.getByText(/verzin samen een verhaal/i)).toBeInTheDocument()
  })

  it('heeft precies één hoofdtitel', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })
})
