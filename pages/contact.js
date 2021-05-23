function Contact() {
  return (
    <>
      <main className="contact-cnt">
        <div className="form-cnt">
          <h1 className="big-font">Don't worry, send a message!</h1>
          <p className="small-font">
            No messages are useless messages. Feel free to get in touch for
            whatever reason! Grab the e-mail{' '}
            <a href="mailto:smithsmusic93@gmail.com" className="highlight-main">
              smithsmusic93@gmail.com
            </a>{' '}
            or complete the form below.
          </p>
          <form
            action="https://formsubmit.co/58299ada9694befabd0d015b609d86c3"
            method="POST"
            className="form"
          >
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/message"
            />
            <input type="hidden" name="_subject" value="CG Prospect | Info" />
            <label htmlFor="name" className="small-font">
              Name
            </label>
            <input type="text" name="name" minLength="3" required />
            <label htmlFor="object" className="small-font">
              Object
            </label>
            <input type="text" name="object" minLength="4" required />
            <label htmlFor="email" className="small-font">
              Email
            </label>
            <input type="email" name="email" minLength="6" required />
            <label className="small-font" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              minLength="10"
              cols="30"
              rows="10"
            ></textarea>
            <button className="btn" type="submit">
              Send Email
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Contact;
