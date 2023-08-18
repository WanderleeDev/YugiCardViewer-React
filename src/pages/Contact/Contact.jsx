import Form from '@components/Form/Form.jsx'
import Banner from '../../components/Banner/Banner'
import { NavPage } from '../../components/NavPage/NavPage'

const Contact = () => {
  return(
    <>
      <Banner/>
      <NavPage />
      <section className="bg-slate-500 max-w-6xl mx-auto my-16">
        <h2 className="text-4xl font-medium">Contact us</h2>
        <Form />
      </section>
    </>
  )
}

export default Contact
