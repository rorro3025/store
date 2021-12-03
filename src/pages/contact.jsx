import Layout from "../components/Layout";
import ContactForm from "../components/contactForm";

function Contact() {
  return (
    <Layout>
      <div className="container text-center mt-3">
        <h1>Contactanos</h1>
        <ContactForm />
      </div>
    </Layout>
  );
}

export default Contact;
