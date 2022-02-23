/*
    This page is a sample and should be deleted when paypal is implemented
    @Zach. This is simply an example on how to use the DB module written
*/
import {getDonationFromUserEmail} from "../../util/mongohelper"; 

export default ({email, dons })=>{
    return (
        <div>
            {email}
            {dons.map(({amount})=><li>{amount}</li>)}
        </div>
    )
}


export async function getStaticPaths() {
    return {
        paths: [{params: {email: "put a valid email here"}}],
        fallback: false
    }
}

export async function getStaticProps({params: {email}}){
    const dons = await getDonationFromUserEmail(email); 
    return {props: {email, dons}}; 
}