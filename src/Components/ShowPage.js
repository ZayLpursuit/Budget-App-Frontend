import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const API=process.env.REACT_APP_API_URL

export default function ShowPage(){
    const {index}=useParams()
    const [data,setData]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`${API}/transactions/${index}`).then(res=>setData(res.data))
    },[index])


    const handleDelete = () => {
        axios
          .delete(`${API}/transactions/${Number(index)}`)
          .then(() => {
            navigate(`/`);
          })
          .catch((e) => console.error(e));
      };
    return (
        <div className="show-grid">
            <h2 className="tran-numb">Transaction number {Number(index)+1}</h2>
        <div className="tran-show">
            <h1>{data.name}</h1>
            <p><strong>Date:</strong>{data.date}</p>
            <p><strong>From:</strong>{data.from}</p>
            <p><strong>Amount:</strong>${data.amount}</p>
            <div>
            <button onClick={()=>navigate(`/transactions/${index}/edit`)}>Edit</button>
            <button onClick={()=>{handleDelete()}} className="del">Delete</button>
                </div>
                </div>
        </div>
    )
}