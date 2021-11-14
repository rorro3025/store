import { useState } from "react"
import { AiOutlineUsergroupAdd } from "react-icons/ai"
import { FaHouseUser } from "react-icons/fa"
import SingUp from "../components/SingUp"
import SingIn from "../components/SingIn"
import AlertError from "./errorMsg";

function SelectType() {
    const [userExits, setUserExist] = useState(false)
    const [msg,setMsg] = useState ("")
    const [msgVisible,setMsgVisible] = useState (false)
    const handleClickExist = () => {
        setUserExist(true)
        console.log("existente", userExits)
    }
    const handleClickNoExist = () => {
        setUserExist(false)
        console.log("no existente", userExits)
    }
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col d-flex justify-content-center py-3 px-6">
                    <div className="card border-primary mb-3 tile" onClick={handleClickNoExist}>
                        <div className="card-header"><AiOutlineUsergroupAdd /> </div>
                        <div className="card-body">
                            <h4>New user</h4>
                            <p>This is the option for new constumers who wants to join</p>
                        </div>
                    </div>
                    <div className="card border-primary mb-3 tile" onClick={handleClickExist}>
                        <div className="card-header"><FaHouseUser /></div>
                        <div className="card-body">
                            <h4>Returning user</h4>
                            <p>Have you been here before, this is the correct answer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="container">
                    {userExits ? <SingIn setMessage={setMsg} setVisible={setMsgVisible}/> : <SingUp setMessage={setMsg} setVisible={setMsgVisible}/>}
                    <AlertError message={msg} visible={msgVisible} />
                </div>
            </div>
            <style jsx>
                {`
                {
                    .tile{
                        max-width: 330px;
                        max-height: 300px;
                        margin:12px;
                    }
                }
                `}
            </style>
        </div>
    )
}

export default SelectType
