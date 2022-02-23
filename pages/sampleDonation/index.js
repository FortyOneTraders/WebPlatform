/*
    This page is a sample and should be deleted when paypal is implemented
    @Zach. This is simply an example on how to use the DB module written
*/

import {useState} from 'react'; 
import axios from 'axios'; 

export default ()=>{

    const [dNum, setDNum] = useState(0); 
    const [email, setEmail] = useState(""); 
    const [responseIndicator, setResponseIndicator] = useState({show: false, success: true}); 


    const click = async ()=>{
        if(!email || !dNum) return; 
        const response = await axios.post("/api/sample_DB_endpoint/", {email, amount: dNum}); 
        setResponseIndicator({show: true, success: response}); 
    }

    const onChange = (value, setter)=> {
        setter(value); 
        setResponseIndicator({show: false, success: true}); 
    }

    return (
    <div>
        <label>Insert an amount to be donated</label>
        <input type="number" value = {dNum} onChange={({target: {value}})=>onChange(value,setDNum)}/> 
        <br />
        <label>Insert email for the donation</label>
        <input type = "text" value = {email} onChange = {({target:{value}})=>onChange(value,setEmail)} /> 
        <br />
        <button onClick={click}>Click me to Donate</button>
        {responseIndicator.show ? <p>{responseIndicator.success ? "Transaction noted" : "Transaction failed"}</p>: null}
    </div>
    )


}