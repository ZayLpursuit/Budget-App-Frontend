import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function NewPage(){
const [form,setForm]=useState({name:"",date:"",amount:"",from:""})
const navigate=useNavigate()
const API = process.env.REACT_APP_API_URL;

function onSubmit(e){
   e.preventDefault()
   axios.post(`${API}/transactions`,form).then(()=>{
       navigate("/")
   })
// navigate("/")
}   
function handleChange(e){
    setForm({
        ...form,[e.target.id]:e.target.value
    })

}

    return (<div className="form-sect">
        <h1 className="add-tran">Add a new Transaction</h1>
        <form onSubmit={onSubmit} className="new-form">
            <div className="spacing">
            <label htmlFor="date">Date:
            </label>
                <input type="text" id="date" className="" value={form.date} onChange={handleChange}/>
            </div>

            <div className="spacing">
            <label htmlFor="name">Name:
            </label>
                <input type="text" id="name" className="" value={form.name} onChange={handleChange}/>
            </div>

            <div className="spacing">
            <label htmlFor="amount">Amount:
            </label>
                <input type="number" id="amount" className="" value={form.amount} onChange={handleChange}/>
            </div>
             
            <div className="spacing">
            <label htmlFor="from">From:
            </label>
                <input type="text" id="from" className="" value={form.from} onChange={handleChange}/>
            </div>
        <div>
            <button type="submit" >Create New Item </button>
</div>
        </form>
    </div>)

}