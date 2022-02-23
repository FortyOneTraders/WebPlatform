import {connectToDatabase} from "./mongodb"; 

// takes a _id = transactionID (if false it will be generated), amount, and assosicated email and adds it to the database
// returns true on sucess and false on failure 
export const addDonationToDB = async (amount, email, _id=false)=>{
    const { db } = await connectToDatabase();
    let data; 
    if(_id === false) data = {amount,email}; 
    else data = {_id,amount,email}; 
    const result = await db.collection("donations").insertOne(data); 
    return result.acknowledged; 
}

export const getDonationFromUserEmail = async email=>{
    const { db } = await connectToDatabase();
    return (await db.collection("donations").find({email}).toArray()).map(({email,amount})=>({email,amount})); 
}