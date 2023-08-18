import Form from '@components/Form/Form.jsx'
import Banner from '../../components/Banner/Banner'

const Contact = () => {
  return(
    <>
      <Banner/>
      <section className="bg-slate-500 max-w-6xl mx-auto my-16">
        <h2 className="text-4xl font-medium">Contact us</h2>
        <Form />
      </section>
    </>
  )
}

export default Contact
