import SingOutS from "../../components/SingOutS";
import {getSession} from "next-auth/react"; 

export default ({user})=>{

    return (<div>
        <SingOutS user = {user}/>
    </div>); 

}


export async function getServerSideProps(context){
    const {user} = await getSession(context) || {user: null};
    const {res} = context;
    if(!user){
        res.statusCode = 302; 
        res.setHeader('Location', '/'); 
        res.end(); 
        return {}; 
    }
    return {props:{user:user}}; 
}