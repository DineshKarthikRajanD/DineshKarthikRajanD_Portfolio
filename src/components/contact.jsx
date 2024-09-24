import React, { useState } from "react";
import Image from "../assets/email-marketing-internet-chatting-24-hours-support.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API or an email service
    console.log("Form data submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="text-white p-8 min-h-screen scroll-smooth" id="contact">
      <h1 className="text-2xl md:text-4xl text-center mt-10 mb-20 font-sans">
        GET IN TOUCH
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[500px] w-[300px] mx-auto bg-[#639cd95b] p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-white">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <img src={Image} alt="" className="w-[700px]" />
        </div>
      </div>
    </div>
  );
}
export default Contact;
