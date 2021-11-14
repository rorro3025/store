import { useState, useEffect } from "react";
import { auth, db, dbName } from "../fireconfig";
import { doc, getDoc } from "firebase/firestore";
import ShopHistory from "../components/History";
import UserCard from "../components/cardInfo";

function UserInfo() {
  const initialState = {
    id: "",
    name: "",
    email: "",
    lastName: "",
    photoURL: "",
    telephone: [],
    address: [],
  };
  const [userCurrentInfo, setCurrentUserInfo] = useState(initialState);
  const user = auth.currentUser;

  const getInfo = async (id) => {
    let docRef = doc(db, dbName, id);
    let docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let data = docSnap.data();
      setCurrentUserInfo({
        id:id,
        name: data.name ? data.name : "undefined",
        email: data.email ? data.email : "undefined",
        lastName: data.lastName ? data.lastName : "undefined",
        telephone: data.telephone ? data.telephone : ["undefined"],
        photoURL: data.photoURL ? data.photoURL : "img/userGen.png",
        address: data.address ? data.address : ["undefined"]
      });
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      setCurrentUserInfo({
        name: user.displayName ? user.displayName : "undefined",
        email: user.email ? user.email : "undefined",
        lastName: "",
        telephone: user.phoneNumber ? user.phoneNumber : ["undefined"],
        photoURL: user.photoURL ? user.photoURL : "img/userGen.png",
      });
      console.log("No such document!");
    }
  };

  useEffect(() => {
    if (user) {
      getInfo(user.uid).then(()=>console.log("sing in")).catch(error=>console.log(error.message));
    } else {
      console.log("something went wrong");
    }
  }, []);
  return (
    <div className="container mt-3 pt-3">
      <h1>Bienvenido</h1>
      <div className="container">
        <UserCard user={userCurrentInfo} />
        <ShopHistory />
      </div>
    </div>
  );
}

export default UserInfo;
