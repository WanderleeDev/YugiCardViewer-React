import notFound from '@assets/404.gif'
import {useRouteError} from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <section className='min-h-screen grid place-content-center place-items-center bg-black'>
      <img src={notFound} alt="" />
      <h1>{`NOT FOUND: ${error.data}`}</h1>
    </section>
  )
}

export default ErrorPage
