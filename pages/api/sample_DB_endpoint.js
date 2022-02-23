/*
    This page is a sample and should be deleted when paypal is implemented
    @Zach. This is simply an example on how to use the DB module written
*/

import {addDonationToDB} from "../../util/mongohelper"; 
const sample_DB_endpoint = async (req,res)=>{
    if (req.method !== "POST"){
        res.status(405).send({message: "Invalid method type: must be POST"}); 
        return;
    }

    const {email = "INVALID",amount = -1} = req.body; 

    if (amount <= 0 || !email.includes("@")){
        res.status(400).send({message: "Invalid input params"}); 
        return; 
    }

    const dbRes = await addDonationToDB(amount,email); 
    
    if (dbRes)
        res.status(200).send("Item added");
    else
        res.status(500).send("DB error");  
    
}

export default sample_DB_endpoint; 