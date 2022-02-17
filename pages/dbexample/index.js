import { connectToDatabase } from "../../util/mongodb";

export default ({name})=>{
	return (
		<div>Test getServerSideProps {name}</div>
	);
}

export async function getServerSideProps(context){
	const { db } = await connectToDatabase(); 
	const name = await db.collection("gtest").find({}).toArray(); 
	return {props: {name: name[0].name}}; 
}
