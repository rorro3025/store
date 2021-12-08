import * as timeago from "timeago.js"
import {useState,useEffect} from "react"
import {db} from "../fireconfig";
import {getDoc,doc} from "firebase/firestore"
function History({uid}) {
    const [list,setList]= useState([])
    const getList = async () =>{
        let docRef = doc(db,"shopHistory",uid)
        let docSnap = await getDoc(docRef)
        setList(docSnap.data().items)
        console.log(docSnap.data().items)
    }
    useEffect(()=>{
        getList().then(()=>console.log("IDK"))
    },[History])
    return (
        <div className="row mt-3">
            <div className="col">
                <h3>History</h3>
                <table className="table table-primary table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Fecha</th>
                    </tr>
                    </thead>
                    {
                        list.length !== 0 ? <tbody>
                            {
                                list.map((item, index) => (
                                        <tr key={index}>
                                            <th>{item.name}</th>
                                            <th>$ {item.price}</th>
                                            <th>{timeago.format(item.bought_at)}</th>
                                        </tr>
                                    )
                                )
                            }
                            </tbody> :
                            <tbody>
                            <tr>
                                <th colSpan="3">No history yet</th>
                            </tr>
                            </tbody>
                    }

                </table>
            </div>
        </div>
    )
}

export default History