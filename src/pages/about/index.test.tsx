// test('renders About component without errors', () => {
//   render(<About />)
// })

// test('renders heading text correctly', () => {
//   render(<About />)
//   const headingElement = screen.getByRole('heading', { level: 1 })
//   expect(headingElement).toHaveTextContent('Lorem')
// })

// import { render, screen } from '@testing-library/react'
// import About from '.'
// test('render react learn link', () => {
//   render(<About />)
//   const linkElement = screen.getByText(/Lorem/)
//   expect(linkElement).toBeInTheDocument()
// })

import { render, screen } from '@testing-library/react'
import About from '.'

test('renders About component', () => {
  render(<About />)
  expect(screen.getAllByText(/Lorem/i).length).toBeGreaterThan(1)
})
