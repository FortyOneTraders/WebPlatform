import { signIn, signOut, useSession } from "next-auth/react";

// this component is used to sign out of the site. only if it it was not SSRed and the user needs to be obtained
const SignInOrOut = ()=>{

    const {data: session, status: loading} = useSession(); 
    return (
        <div>
            {loading === "loading" && <p>Loading... </p> } 
            {session ? <>
                Signed in as {session?.user?.name ? session.user.name : "Unknown"}
                <button onClick={()=>signOut()}>Sign Out</button>
            </> : <button onClick={()=>{
                    signIn("google", {callbackUrl: "http://localhost:3000/"})
                }}>Sign in </button>}
        </div>
    ); 
}

export default SignInOrOut; 