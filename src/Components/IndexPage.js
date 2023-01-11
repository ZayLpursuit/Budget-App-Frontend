import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const API=process.env.REACT_APP_API_URL

export default function IndexPage(){
    const [data,setData]=useState([])
    const navigate=useNavigate()
    

    useEffect(()=>{
        axios.get(`${API}/transactions`).then(res=>setData(res.data))
    },[])

    let total=data.reduce((acc,transaction)=>acc+Number(transaction.amount),0)

    if(total>=1000){
        total=<span className="green">${total.toLocaleString()}</span>
    }
    if (total<0){
        total=<span className="red">${total.toLocaleString()}</span>
    }


    return (
        <div className="index-grid">
            <h1 className="bnk-tot">Bank Account Total: ${total}</h1>
            <table className="table">
            <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            </tr>
        </thead>
        <tbody>
                {data?
                    

                data.map((dat,idx)=>{
                
                    return(
                <tr onClick={()=>navigate(`/transactions/${idx}`)}>
                    <th scope="row">{idx+1}</th>
                    <td>{dat.date} </td>
                    <td>{dat.name}</td> 
                    <td>{dat.amount} </td>
                    
                    </tr>
    
                )}):"No transactions Yet"
                }

              </tbody>  
            </table>
           
        </div>
    )
}