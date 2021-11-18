import {toast} from "react-toastify"
function ContactForm() {
    const handleSubmit = (e) =>{
        e.preventDefault();
        toast.success("Thanks for comment")
    }
    return (
        <div className={"row justify-content-center"}>
            <div className={"col-md-auto mt-2"}>
                <p className={"text-muted"}>Cuautitlan Izcalli, Edo. de México C.P. 94158</p>
                <cite className={"text-muted"}>123-456-7890/<a href="mailto:info@mysite.com">Email</a></cite>
                <form style={{width: 300}} onSubmit={handleSubmit}>
                    <input type="text" className="form-control bg-primary my-2 text-white" placeholder="name"/>
                    <input type="email" name="Email" placeholder={"email"}
                           className="form-control bg-primary my-2 text-white"/>
                    <input type="text" name="subject" placeholder="Subject"
                           className="form-control bg-primary my-2 text-white"/>
                    <textarea name="Message" rows="3" placeholder={"Message"}
                              className="form-control bg-primary my-2 text-white"></textarea>
                    <div className="d-grid gap-2">
                        <input type="submit" value="Send" className={"btn btn-danger"}/>
                    </div>
                </form>
            </div>
            <div className="col-md-auto mt-2">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.4594059490196!2d-99.1921831856532!3d19.693055837404728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21fe02b147aab%3A0xb8695da3fafd511b!2sFacultad%20de%20Estudios%20Superiores%20Cuautitl%C3%A1n%20UNAM%20Campus%204!5e0!3m2!1ses-419!2smx!4v1637113748432!5m2!1ses-419!2smx"
                    width="400" height="350" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
}

export default ContactForm;
