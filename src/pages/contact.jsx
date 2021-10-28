import Layout from "../components/Layout";
import ContactForm from "../components/contactForm";

function Contact() {
  return (
    <Layout>
      <div className="container text-center">
        <h1>Contact us</h1>
        <ContactForm />
      </div>
    </Layout>
  );
}

export default Contact;
