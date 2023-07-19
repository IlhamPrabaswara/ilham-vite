import { render, screen } from '@testing-library/react'
import About from '.'

describe('Check Contact Page Render', () => {
  test('Check render title', () => {
    render(<About />)
    screen.getByText('Hi! I\'m Ilham.')
  })
  test('Check content', () => {
    render(<About />)
    screen.getByText(
      'A front-end enthusiast from Indonesia. I create and build websites to communicate a feeling of joy and comfort that shall invite the user to come back.'
    )
  })
})
