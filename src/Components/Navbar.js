import { useNavigate } from "react-router-dom"


export default function Navbar(){
    const navigate=useNavigate()
    return (
        <nav className="nav">
            <h1>Budget App</h1>
            <h3  className= "home"onClick={()=>navigate("/")}>Home</h3>
            <div className="end" >
            <button onClick={()=>navigate("/transactions/new")} className="nav-btn">New Transaction</button>
            </div>
        </nav>
    )
}