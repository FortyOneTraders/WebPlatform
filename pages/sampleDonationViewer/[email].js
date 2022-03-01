/*
    This page is a sample and should be deleted when paypal is implemented
    @Zach. This is simply an example on how to use the DB module written
*/
import {getDonationFromUserEmail} from "../../util/mongo/mongoTransactions/index.js"; 

export default ({email, dons })=>{
    return (
        <div>
            {email}
            {dons.map(({amount}, i)=><li key={i}>{amount}</li>)}
        </div>
    )
}


export async function getStaticPaths() {
    return {
        paths: [{params: {email: "gpress2222@gmail.com"}}],
        fallback: false
    }
}

export async function getStaticProps({params: {email}}){
    const dons = await getDonationFromUserEmail(email); 
    return {props: {email, dons}}; 
}