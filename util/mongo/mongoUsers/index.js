import {connectToDatabase} from "../mongodb.js"; 



// adds new user to database if not there 
// returns {added: true/false, user: {email,name,image, _id(might be undefined)}}
export const addNewUser = async (email,name,image)=>{

    const {db} = await connectToDatabase();
    const {upsertedCount: added, upsertedId: _id} = await db.collection("users").update({email}, {"$setOnInsert":{email,name,image}}, {upsert: true});  
    return {added: added ? true: false, user: {email,name,image, _id: _id?.toHexString()}};   
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