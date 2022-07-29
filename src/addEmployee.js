import React, {useState} from "react"
import "./adding.css"
function AddEmployee(props){

    const [id, setID] = useState('')
    const [plan, setPlan] = useState('')

    const add=(()=>{
        props.add(id, plan);
    })

    return(
        <div className="container">

            <h1 style={{paddingLeft: "5px"}}>Planning</h1>
            <input type="text" style={{width: '5%'}} placeholder="Enter ID" onChange={(e)=>setID(e.target.value)} />
            <input type="text" placeholder="Enter your first names" onChange={(e)=>setPlan(e.target.value)} />

            <button className="btn" onClick={add} style={{backgroundColor: 'green', borderRadius: ' 40px'}}>+</button>
        </div>
    )
}

export default AddEmployee;