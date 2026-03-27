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

        <p className="pt-6 max-w-prose md:text-center mb-4 md:mb-8 lg:mb-12">
          If you have a project in mind or just want to say hello, don't hesitate to get in touch. I'm always open to new opportunities and collaborations, and I'd be happy to hear about your ideas.
        </p>

        <div className="flex flex-col items-start gap-2 w-full mb-8">
          <div className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <a className="w-full" href="mailto:contact@takaharusuzuki.ca">contact@takaharusuzuki.ca</a>
          </div>
          <div className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            <a className="w-full" href="tel:7802208940">780-220-8940</a>
          </div>
        </div>

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