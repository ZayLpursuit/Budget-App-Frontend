import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const API = process.env.REACT_APP_API_URL;

export default function EditPage(){
 
    const [form,setForm]=useState({})
    const navigate=useNavigate()
    const {index}=useParams()
    
    useEffect(()=>{
        axios.get(`${API}/transactions/${Number(index)}`).then(res=>setForm(res.data))
    },[index])
    
    function handleChange(e){
        setForm({
            ...form,[e.target.id]:e.target.value
        })}

        function onSubmit(e){
            e.preventDefault()
            axios.put(`${API}/transactions/${index}`,form).then(()=>{
                navigate(`/transactions/${index}`)
            })
        
         } 

         

    return (
    <div className="edit-page">
        <h1 className="edit-head">Edit Transaction Number: {Number(index)+1}</h1>
         <form onSubmit={onSubmit} className="new-form">
            <div  className="spacing">
             <label htmlFor="date">Date:
             </label>
                 <input type="text" id="date" className="" value={form.date} required onChange={handleChange}/>
             </div>
            
            <div className="spacing">
             <label htmlFor="name">Name:
             </label>
                 <input type="text" id="name" className="" value={form.name} required onChange={handleChange}/>
             </div>

             <div className="spacing">
             <label htmlFor="amount">Amount:
             </label>
                 <input type="number" id="amount" className="" value={form.amount} required onChange={handleChange}/>
             </div>

            <div className="spacing">
             <label htmlFor="from">From:
             </label>
                 <input type="text" id="from" className="" value={form.from} required onChange={handleChange}/>
             </div>

         <div>
             <button type="submit" >Edit Item </button>
 </div>
         </form>
    </div>
    )
}