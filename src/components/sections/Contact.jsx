import { useState } from "react"
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [form, setForm] = useState({
    user_name: '',
    user_email: '',
    message: ''
  })

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
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
      alert('Message sent!')
      setForm({ user_name: '', user_email: '', message: '' })
    })
    .catch((error) => {
      console.error(error)
      alert('Failed to send')
    })
  }

  return (
    <section className="section-y-spacing bg-sky-900 text-sky-100">
      <div className="px-4 md:flex md:flex-col md:items-center max-w-xl mx-auto pb-8 md:pb-0">

        <h2 className="uppercase text-h2 border-l-4 border-l-sky-400 ps-3">
          Conctact
        </h2>

        <p className="py-6 max-w-prose md:text-center mb-4 md:mb-8 lg:mb-12">
          If you have a project in mind or just want to say hello, don't hesitate to get in touch.I'm always open to new opportunities and collaborations, and I'd be happy to hear about your ideas.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 w-full">

          <div>
            <label className="text-ui block mb-2">Your Name</label>
            <input
              type="text"
              name="user_name"
              value={form.user_name}
              onChange={handleChange}
              required
              className="w-full rounded-full px-5 py-3 bg-sky-50 text-sky-950"
              placeholder="Enter Your Name"
              autoComplete="name"
            />
          </div>

          <div>
            <label className="text-ui block mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              value={form.user_email}
              onChange={handleChange}
              required
              className="w-full rounded-full px-5 py-3 bg-sky-50 text-sky-950"
              placeholder="Enter Your Email Address"
              autoComplete="email"
            />
          </div>

          <div>
            <label className="text-ui block mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full rounded-3xl px-5 py-4 bg-sky-50 text-sky-950"
              placeholder="Type Your Message Here"
            />
          </div>

          <button
            type="submit"
            className="text-ui w-full bg-sky-400 text-white py-3 rounded-full hover:bg-sky-500 transition"
          >Send</button>

        </form>

      </div>
    </section>
  )
}

export default Contact