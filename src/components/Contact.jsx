import React, { useState } from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";


export default function Contact() {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const [sent, setSent] = useState(false);
const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true); // 送信中

  emailjs.send(
    "service_wj549kd",
    "template_dj19cdw",
    form,
    "f_cvMXSjZL9rIWr1U"
  )
  .then(() => {
    setSent(true);
    setForm({ firstName: "", lastName: "", email: "", message: "" });
  })
  .catch((error) => {
    console.log("FAILED...", error);
    alert("送信に失敗しました");
  })
  .finally(() => {
    setLoading(false); // 完了
  });
};


  return (
    <section id="contact" className="contact">

      <h1 className="section-title">Contact</h1>

      <div className="contact-box">

        {/* 左側 */}
        <div className="contact-left">

          <h1>Get in Touch</h1>

          <p className="contact-subtitle">
            I'd like to hear from you!
          </p>

          <p className="contact-description">
            If you have any questions or just want to <br/>
            say hi, feel free to send me a message.
          </p>

          <div className="contact-email">
            <MdEmail size={50} style={{ marginRight: "15px", color: "#08519a" }} />
            kyukyu030604@icloud.com
          </div>

          <footer className="footer">
            <p>© 2026 Kawai Kiyu. All rights reserved.</p>
          </footer>

        </div>

        {/* 右側フォーム */}
        <div className="contact-right">

          <form onSubmit={handleSubmit}>

            <div className="name-row">

              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
              />

            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
  {loading ? "Sending..." : "Send Message"}
</button>

           {sent && (
  <p className={`success ${sent ? "show" : ""}`}>
    Message Sent ✔
  </p>
)}

          </form>

        </div>

      </div>

    </section>
  );
}