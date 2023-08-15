import {useParams} from 'react-router-dom'

const Contact = () => {
  const { id } = useParams()
  return(
    <>
      <form>
        Contacto
      </form>
    </>
  )
}

export default Contact
