import { useState, useEffect } from "react"
import emailjs from '@emailjs/browser'
import FormSuccess from "../ui/FormSuccess"
import FormError from "../ui/FormError"
import Form from "../ui/Form"

function Contact() {
  const [form, setForm] = useState({
    user_name: '',
    user_email: '',
    message: ''
  })

  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle')
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [status])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('success')
        setForm({ user_name: '', user_email: '', message: '' })
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <section id="contact" className="section-y-spacing bg-sky-900 text-sky-100">
      <div className="px-4 md:flex md:flex-col md:items-center max-w-xl mx-auto pb-8 md:pb-0">

        <h2 className="uppercase text-h2 border-l-4 border-l-sky-400 ps-3">
          Contact
        </h2>

        <p className="py-6 max-w-prose md:text-center mb-4 md:mb-8 lg:mb-12">
          If you have a project in mind or just want to say hello, don't hesitate to get in touch. I'm always open to new opportunities and collaborations, and I'd be happy to hear about your ideas.
        </p>

        {status === 'success' ? 
          <FormSuccess />
        : status === 'error' ? 
          <FormError />
        : 
          <Form form={form} handleChange={handleChange} handleSubmit={handleSubmit}/>
        }

          
      </div>
    </section>
  )
}

export default Contact