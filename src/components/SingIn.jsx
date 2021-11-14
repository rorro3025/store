import {useState} from "react"
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../fireconfig"
import {GiConverseShoe} from "react-icons/gi"
import {useUser} from "../context/shopContext"

function SingIn({setMessage, setVisible}) {
    const {setSession} = useUser()
    const [singInInfo, setSingInInfo] = useState({email: "", password: ""})
    const handleChange = ({target}) => {
        let {name, value} = target
        setSingInInfo({...singInInfo, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, singInInfo.email, singInInfo.password).then(() => {
            setSession(true)
            setMessage("")
            setVisible(false)
        }).catch((error) => {
            if (error.code === "auth/user-not-found") setMessage("User does NOT exist")
            if (error.code === "auth/wrong-password") setMessage("Check credentials")
            setVisible(true)
        })
        console.log("email and password")
    }
    return (
        <main className="form-signin">
            <form onSubmit={handleSubmit}>
                <h1 className={"text-center"}>
                    <GiConverseShoe/>
                </h1>
                <p className={"text-center"}>Use you email and password</p>
                <div className="form-floating">
                    <input type="email" name={"email"} className={"form-control"} placeholder={"some@email.com"}
                           onChange={handleChange}/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating">
                    <input type="password" name="password" className={"form-control"} placeholder={"password"}
                           onChange={handleChange}/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="d-grid gap-2">
                    <input type="submit" value="Sing in" className={"btn btn-primary"}/>
                </div>
            </form>
            <style jsx>
                {`
                  .form-signin {
                    width: 100%;
                    max-width: 330px;
                    padding: 15px;
                    margin: auto;
                  }

                  .form-signin .form-floating:focus-within {
                    z-index: 2;
                  }

                  .form-signin input[type="email"] {
                    margin-bottom: -1px;
                    border-bottom-right-radius: 0;
                    border-bottom-left-radius: 0;
                  }

                  .form-signin input[type="password"] {
                    margin-bottom: 10px;
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                  }
                `}
            </style>
        </main>
    )
}

export default SingIn;