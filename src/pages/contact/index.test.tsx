import { render, screen, fireEvent } from '@testing-library/react'
import Contact from '.'
test('renders form fields', () => {
  render(<Contact />)

  expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
})

test('submits form and shows success message', async () => {
  render(<Contact />)

  const firstNameInput = screen.getByLabelText(/First Name/i)
  const lastNameInput = screen.getByLabelText(/Last Name/i)
  const emailInput = screen.getByLabelText(/Email/i)
  const messageInput = screen.getByLabelText(/Message/i)
  const submitButton = screen.getByRole('button', { name: /Submit/i })

  fireEvent.change(firstNameInput, { target: { value: 'John' } })
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } })
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
  fireEvent.change(messageInput, { target: { value: 'Hello, World!' } })

  fireEvent.click(submitButton)

  // Wait for the alert to show up and check its content
  const alert = await screen.findByRole('alert')
  expect(alert).toHaveTextContent(/Hi John!/i)
})
