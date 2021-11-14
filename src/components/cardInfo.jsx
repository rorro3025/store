import { useState } from "react";
import { auth } from "../fireconfig";
import { signOut } from "firebase/auth";
import MiniForm from "../components/MiniForm";
import { useUser } from "../context/shopContext";

function CardInfo({ user }) {
  const [showPhone, setShowPhone] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const { setSession } = useUser();
  const handleSingOut = () => {
    signOut(auth)
      .then(() => setSession(false))
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="row">
      <div className="col-sm-3 text-center">
        <img
          src={user.photoURL}
          alt="userPhoto"
          width="125px"
          className="border border-3 border-danger rounded-circle"
        />
        <br />
        <button
          type="button"
          className="btn btn-danger my-2"
          onClick={handleSingOut}
        >
          Sing out
        </button>
      </div>
      <div className="col-sm-7">
        <div className="panel">
          <div className="panel-body">
            <h4 className="text-center">
              <strong>
                {user.name} {user.lastName}
              </strong>
            </h4>
            <strong>Email: </strong>
            {user.email} <br />
            <strong>Telefono: </strong>
            <ul>
            {
              user.telephone.map((item,index) => (<li key={index}>{item}</li>))
            }</ul>
            <button
              className="btn btn-primary btn-sm mx-4"
              onClick={() => setShowPhone(true)}
            >
              Add
            </button>
            {/*<MiniForm
              visible={showPhone}
              setVisible={setShowPhone}
              id={user.id}
              concept="telephone"
              type="number"
            />*/}
            <br />
            <strong>Ubicación:</strong>
            <ul>
              {user.address.map((item,index) => (<li key={index}>{item}</li>))}
            </ul>

            <button
              className="btn btn-primary btn-sm mx-4"
              onClick={() => setShowAddress(true)}
            >
              Add
            </button>
            {/*<MiniForm
              visible={showAddress}
              setVisible={setShowAddress}
              id={user.id}
              concept="address"
              type="text"
            />*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
