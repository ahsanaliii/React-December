import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_85jn4wt",
        "template_vkl2b8h",
        form.current,
        "0eaGfHUpsGoYhz1eG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <>
      <h1>Ahsan Ali</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="full name" />
        <input type="text" name="user_email" placeholder="email" />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" id="" cols="30" rows="10"></textarea>
        <button type="submit">send message</button>
      </form>
    </>
  );
};

export default Contacts;
