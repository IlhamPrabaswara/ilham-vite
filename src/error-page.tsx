import { useRouteError } from 'react-router-dom'

interface CustomErrorType {
  statusText?: string
  message?: string
}

export default function ErrorPage() {
  const error = useRouteError() as CustomErrorType

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  )
}
