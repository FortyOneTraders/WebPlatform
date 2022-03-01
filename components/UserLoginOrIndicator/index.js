import { signIn, signOut, useSession } from "next-auth/react";

const UserLoginOrIndicator = ()=>{

    const {data: session, status: loading} = useSession(); 


    return (
        <div>
            {loading === "loading" && <p>Loading... </p> } 
            {session ? <>
                Signed in as {session.user.name}
                <button onClick={()=>signOut()}>Sign Out</button>
            </> : <button onClick={()=>{
                    signIn("google", {callbackUrl: "http://localhost:3000/"})
                }}>Sign in </button>}
        </div>
    ); 
}


export default UserLoginOrIndicator; 