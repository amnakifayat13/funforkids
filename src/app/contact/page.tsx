// components/ContactForm.js


const ContactForm = () => {
  return (
    <div className="main">
        <div className="cont">
        <h2 className="contact-heading">Contact Us</h2>
        <div><img src="/img00.png"/></div>
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
      <div><img src="/img02.png"/></div>
      <div><img src="/img01.png"/></div>
      </div>
      
      
      
    </div>
  );
};

export default ContactForm;
