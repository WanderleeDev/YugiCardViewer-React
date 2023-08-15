import {useRouteError} from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div>{`NOT FOUND: ${error.data}`}</div>
  )
}

export default ErrorPage
