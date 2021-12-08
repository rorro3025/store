import {GiConverseShoe} from "react-icons/gi";
import {BsFacebook} from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";
import {useState} from "react";
import {db, dbName, auth} from "../fireconfig";
import {doc, setDoc} from "firebase/firestore";
import {
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import {useUser} from "../context/shopContext"

function SingUp({setMessage, setVisible}) {
    // * use of object provider from firebase and instance for other imports
    const {setSession} = useUser()
    const provider = new GoogleAuthProvider();
    const initialState = {
        name: "",
        email: "",
        lastName: "",
        telephone: "",
        photoURL: "img/userGen.webp",
        password: "",
        passwordConfirmation: "",
    };
    const [userInfo, setUserInfo] = useState(initialState);
    // * end of constructors
    //? methods for connect firebase and user accounts
    const createHystory = async (uid) =>{
        let model ={
            type:"new user",
            items:[]
        }
        await setDoc(doc(db,"shopHistory", uid), model)
    }
    const handleGoogle = () => {
        console.log("google");
        signInWithPopup(auth, provider)
            .then((result) => {
                let credencial = result.user
                console.log(credencial);
                createHystory(credencial.uid).then(()=>setSession(true))

            })
            .catch((error) => console.log(error.code, error.message));
    };

    const handleFacebook = () => console.log("facebook");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInfo.password === userInfo.passwordConfirmation) {
            createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
                .then(async (credential) => {
                    let {user} = credential;
                    console.log(user.uid);
                    let model = {
                        ...userInfo,
                        telephone: [userInfo.telephone]
                    }
                    console.log(model);
                    await setDoc(doc(db, dbName, user.uid), model)
                        .then(() => {
                            createHystory(user.uid);
                            setSession(true)
                        })
                        .catch((error) => console.log(error.message));
                })
                .catch((error) => {
                    if (error.code === "auth/email-already-in-use") setMessage("The email is linked to another account")
                    console.log(error.code)
                    setVisible(true)
                });
        } else {
            setMessage("PASSWORDS does not match")
            setVisible(true)
        }
    };
    // ? end methods create users

    const handleChange = (event) => {
        let {name, value} = event.target;
        setUserInfo({...userInfo, [name]: value});
    };

    return (
        <main className={"form-signin"}>
            <form onSubmit={handleSubmit}>
                <h1 className={"text-center"}>
                    <GiConverseShoe/>
                </h1>
                <p className={"text-center"}>Fill the next form please !!!</p>
                <div className="form-floating">
                    <input
                        type="email"
                        name="email"
                        className={"form-control"}
                        id={"floatingtEmail"}
                        placeholder={"someemail@mail.com"}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="floatingtEmail">Email</label>
                </div>
                <div className="form-floating">
                    <input
                        type="text"
                        name="name"
                        className={"form-control"}
                        id={"floatingtName"}
                        placeholder={"someemail@mail.com"}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="floatingtName">Name</label>
                </div>
                <div className="form-floating">
                    <input
                        type="text"
                        name="lastName"
                        className={"form-control"}
                        id={"floatingtLastName"}
                        placeholder={"someemail@mail.com"}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="floatingtLastName">Lastname</label>
                </div>
                <div className="form-floating">
                    <input
                        type="tel"
                        name="telephone"
                        className={"form-control"}
                        id={"floatingtTel"}
                        placeholder={"someemail@mail.com"}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="floatingtTel">Telephone</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        name="password"
                        className={"form-control"}
                        id={"floatingtPassword"}
                        placeholder={"someemail@mail.com"}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="floatingtPassword">Password</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        name="passwordConfirmation"
                        className={"form-control"}
                        id={"floatingtPasswordConfirm"}
                        placeholder={"someemail@mail.com"}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="floatingtPasswordConfirm">
                        Confirm your password
                    </label>
                </div>
                <div className="d-grid gap-2">
                    <input type="submit" className={"btn btn-primary"} value="Sing up"/>
                    <button
                        className={"btn btn-danger"}
                        type="button"
                        onClick={handleGoogle}
                    >
                        <FcGoogle className={"mx-1"}/>
                        Sing in
                    </button>
                    <button
                        className={"btn btn-info"}
                        type="button"
                        onClick={handleFacebook}
                    >
                        <BsFacebook className={"mx-1"}/>
                        Sing in
                    </button>
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
    );
}

export default SingUp;
