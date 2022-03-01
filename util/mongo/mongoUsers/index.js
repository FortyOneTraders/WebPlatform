import {connectToDatabase} from "../mongodb.js"; 



// adds new user to database if not there 
// returns {added: true/false, user: user}
export const addNewUser = async (email,name,image)=>{

    const {db} = await connectToDatabase();
    let user = await db.collection("users").findOne({email}); 
    let added = false; 
    if (!user){
        added = true;
        const result = await db.collection("users").insertOne({email,name,image});
        user = {email,name,image, _id: result.insertedId}; 
    }
    user._id = user._id.toHexString();
    return {added, user};
}


// gets the user with a given email str
// returns user 
export const getUserFromEmail = async email=>{
    const { db } = await connectToDatabase();
    const user =  await db.collection("users").findOne({email}); 
    user._id = user._id.toHexString();
    return user; 
}; 

// gets the user with a given id hex value
// returns user 
export const getUserFromId = async _id=>{
    const { db } = await connectToDatabase();
    const user =  await db.collection("users").findOne({_id}); 
    user._id = user._id.toHexString();
    return user; 
}; 