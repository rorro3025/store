import {useState} from "react";
import {db} from "../fireconfig";
import {doc, updateDoc, arrayUnion} from "firebase/firestore";
import {toast} from "react-toastify"

function MiniForm({visible, setVisible, id, concept, type}) {
    const [newInfo, setNewInfo] = useState("");
    const handleChange = ({target}) => setNewInfo(target.value);
    const updateInfo = async () => {
        let docRefForm = doc(db, "Users", id);
        await updateDoc(docRefForm, {[concept]: arrayUnion(newInfo)});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        updateInfo().then(() => {
            toast.info("Added successfully")
            setNewInfo("");
            setVisible(false);
        });
    };
    const handleCancel = () => {
        setNewInfo("");
        setVisible(false);
    };
    return (
        <div className={visible ? "d-flex mt-3" : "visually-hidden"}>
            <form onSubmit={handleSubmit} className="d-flex">
                <input
                    type={type}
                    placeholder="new information"
                    onChange={handleChange}
                    value={newInfo}
                    className="form-control me-2 ajust"
                />
                <input
                    type="submit"
                    value="Save"
                    className="btn btn-outline-primary btn-sm"
                />
            </form>
            <button className="btn btn-outline-danger btn-sm" onClick={handleCancel}>
                Cancel
            </button>
            <style jsx>
                {`
                  {
                  .ajust {
                    width: 220px;
                  }

                  }
                `}
            </style>
        </div>
    );
}

export default MiniForm;
