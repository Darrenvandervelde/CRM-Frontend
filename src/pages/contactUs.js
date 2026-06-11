import Navbar from "./components/navbar";
import './styles/contactUs.css';

function ContactUs() {
    return (
        <main>
            <Navbar />
            <section className="ContactUsContainer">
                <div className="ContactUsContent">
                    <h1>Contact Us</h1>
                    <p className="Subtitle">
                        We'd love to hear from you. Get in touch with our team.
                    </p>
                    
                    <form className="ContactForm">
                        <div className="FormGroup">
                            <label htmlFor="name">Full Name</label>
                            <input 
                                type="text" 
                                id="name"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="FormGroup">
                            <label htmlFor="email">Email Address</label>
                            <input 
                                type="email" 
                                id="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="FormGroup">
                            <label htmlFor="subject">Subject</label>
                            <input 
                                type="text" 
                                id="subject"
                                placeholder="What is this about?"
                                required
                            />
                        </div>

                        <div className="FormGroup">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                id="message"
                                placeholder="Tell us more about your inquiry..."
                                rows="6"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="SubmitBtn">Send Message</button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default ContactUs;
