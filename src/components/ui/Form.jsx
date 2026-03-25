const Form = ({form, handleChange, handleSubmit}) => {
    return (
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
                autoComplete="name" />
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
                autoComplete="email" />
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
                placeholder="Type Your Message Here" />
            </div>

            <button
                type="submit"
                className="text-ui w-full bg-sky-400 text-white py-3 rounded-full hover:bg-sky-500 transition"
            >Send</button>

        </form>
    )
}

export default Form