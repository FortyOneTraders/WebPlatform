import {signOut } from "next-auth/react";
// This component is used to sign out of the site. only if it was used by a SSRed page and the user pased
const SignOutS = ({user}) => {

    return (
        <div>
            {user ? <>
                Signed in as {user?.name ? user.name : "Unknown"}
                <button onClick={()=>signOut()}>Sign Out</button>
            </> : <div>ERROR THIS SHOULD NEVER SHOW</div>}
        </div>
    ); 
}


export default SignOutS; 