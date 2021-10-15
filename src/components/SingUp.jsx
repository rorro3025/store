import { GiConverseShoe } from "react-icons/gi";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { db, dbName } from "../fireconfig";
import { auth } from "../fireconfig";
import { doc, setDoc } from "firebase/firestore";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";
import { async } from "@firebase/util";

function SingUp({ setUserAccount }) {
  // * use of object provider from firebase and instance for other imports
  const provider = new GoogleAuthProvider();
  const { push } = useRouter();
  const initialState = {
    name: "",
    email: "",
    lastName: "",
    telephone: "",
    photoURL:"img/userGen.png",
    password: "",
    passwordConfirmation: "",
  };
  const [userInfo, setUserInfo] = useState(initialState);
  // * end of constructors
  //? methods for connect firebase and user accounts
  const handleGoogle = () => {
    console.log("google");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUserAccount(true);
      })
      .catch((error) => console.log(error.code, error.message));
  };

  const handleFacebook = () => console.log("facebook");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo.password === userInfo.passwordConfirmation) {
      createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then(async (credencial) => {
          let { user } = credencial;
          console.log(user.uid);
          console.log(userInfo);
          await setDoc(doc(db, dbName, user.uid), userInfo)
            .then(() => setUserAccount(true))
            .catch((error) => console.log(error.message));
        })
        .catch((error) => console.log(error.code));
    } else {
      console.log("PASSWORDS does not match");
    }
  };
  // ? end methods create users

  const handleChange = (event) => {
    let { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <main className={"form-signin"}>
      <form onSubmit={handleSubmit}>
        <h1 className={"text-center"}>
          <GiConverseShoe />
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
          <input type="submit" className={"btn btn-info"} value="Sing up" />
          <button
            className={"btn btn-danger"}
            type="button"
            onClick={handleGoogle}
          >
            <FcGoogle className={"mx-1"} />
            Sing in
          </button>
          <button
            className={"btn btn-primary"}
            type="button"
            onClick={handleFacebook}
          >
            <BsFacebook className={"mx-1"} />
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
