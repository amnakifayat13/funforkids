import Image from "next/image";


const ContactForm = () => {
  return (
    <div className="main">
        <div className="cont">
        <h2 className="contact-heading">Contact Us</h2>
        <div><Image src="/img00.png" alt="" width={700} height={700}/></div>
        </div>
      
      <div>
      <form className="form">
        <label className="label">
          Name:
          <input type="text" name="name" className="input" required />
        </label>
        <br/>
        <label className="label">
          Email:
          <input type="email" name="email" className="input" required />
        </label>
        <br/>
        <label className="label">
          Message:
          <textarea name="message" className="textarea" required></textarea>
        </label>
        <button type="submit" className="button">Send</button>
      </form>
      </div>
      <div className="right-img">
      <div><Image src="/img02.png" alt="" width={300} height={300}/></div>
      <div><Image src="/img01.png" alt="" width={300} height={300}/></div>
      </div>
      
      
      
    </div>
  );
};

export default ContactForm;
