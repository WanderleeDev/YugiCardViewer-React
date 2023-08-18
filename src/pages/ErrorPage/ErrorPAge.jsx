import notFound from '@assets/404.webp'
import {useRouteError, Link} from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <section className='min-h-screen grid place-content-center place-items-center bg-black'>
      <img src={notFound} alt="" />
      <h1>{`NOT FOUND: ${error.data}`}</h1>
      <Link className='my-4 hover:underline bg-slate-300/80 py-2 px-4 rounded-md text-slate-900 font-semibold outline-offset-2 ' to='/'>
        {`Back to Home`}
      </Link>
    </section>
  )
}

export default ErrorPage
