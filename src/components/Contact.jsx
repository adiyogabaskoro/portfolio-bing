    import React, { useState } from "react";
    import { FaEnvelope, FaPhoneAlt, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

    function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! (you can connect this with EmailJS later)");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact" id="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out — I’d love to collaborate or discuss new opportunities.</p>

        <div className="contact-container">
            {/* FORM */}
            <form onSubmit={handleSubmit} className="contact-form">
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
            ></textarea>
            <button type="submit">Send Message</button>
            </form>

            {/* INFO / ICONS */}
            <div className="contact-info">
            <p><FaEnvelope /> adiyoga@example.com</p>
            <p><FaPhoneAlt /> +62 812-3456-7890</p>
        <div className="social-icons">
        <a
            href="https://www.instagram.com/adiyogabaskr/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaInstagram />
        </a>

        <a
            href="https://www.linkedin.com/in/adiyoga-a-baskoro-170b36377"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaLinkedin />
        </a>

        <a
            href="https://github.com/adiyogabaskoro"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaGithub />
        </a>
        </div>

            </div>
        </div>
        </div>
    );
    }

    export default Contact;
