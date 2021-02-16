import emailjs from "emailjs-com";
import React from "react";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "Gmail",
        "Template MBrasil",
        e.target,
        "user_ySq4Gpz51PluUXjaVAx3o"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <div className="form-group">
        <label htmlFor="from_name">Name*</label>
        <input
          className="form-control"
          type="text"
          id="from_name"
          name="from_name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="reply_to">Email*</label>
        <input
          className="form-control"
          type="email"
          id="reply_to"
          name="reply_to"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message*</label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          required
        />
      </div>
      <p>
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </p>
    </form>
  );
}
