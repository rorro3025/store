import React from "react";
import { auth } from "../fireconfig";
import { signOut } from "firebase/auth";
import { db, dbName } from "../fireconfig";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import {useEffect} from "react"

function UserInfo({ setUserAccount }) {
  const initialState = {
    name: "",
    email: "",
    lastName: "",
    photoURL: "",
    telephone: "",
  };
  const [userCurrentInfo, setCurrentUserInfo] = useState(initialState);
  const handleSingOut = () => {
    signOut(auth)
      .then(() => setUserAccount(false))
      .catch((err) => console.log(err.message));
  };

  const user = auth.currentUser;

  const getInfo = async (id) => {
    let docRef = doc(db, dbName, id);
    let docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let data = docSnap.data();
      setCurrentUserInfo({
        name: data.name ? data.name : "no definido",
        email: data.email ? data.email : "no definido",
        lastName: data.lastName ? data.lastName : "no definido",
        telephone: data.telephone ? data.telephone : "no definido",
        photoURL: data.photoURL ? data.photoURL : "img/userGen.png",
      });
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      setCurrentUserInfo({
        name: user.displayName ? user.displayName : "no definido",
        email: user.email ? user.email : "no definido",
        lastName: "",
        telephone: user.phoneNumber ? user.phoneNumber : "no definido",
        photoURL: user.photoURL ? user.photoURL : "img/userGen.png",
      });
      console.log("No such document!");
    }
  };
  
  useEffect(() => {
    if (user) {
      console.log(user.displayName, user.email, user.phoneNumber, user.uid);
      getInfo(user.uid);
    } else {
      console.log("something went wrong");
    } 
  }, [])
  return (
    <div className="container mt-3 pt-3">
      <h1>Bienvenido</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <img
              src={userCurrentInfo.photoURL}
              alt="userPhoto"
              width="125px"
              className="border border-3 border-danger rounded-circle"
            />
          </div>
          <div className="col-sm-7">
            <div className="panel">
              <div className="panel-body text-center">
                <h4>
                  <strong>
                    {userCurrentInfo.name} {userCurrentInfo.lastName}
                  </strong>
                </h4>
                <strong>Email: </strong>
                {userCurrentInfo.email} <br />
                <strong>Telefono: </strong>
                {userCurrentInfo.telephone}
                <br />
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleSingOut}
                >
                  Sing out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
