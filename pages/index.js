import clientPromise from "../lib/mongodb"; 

export default ({isConnected}) => {
  return (
    <div>
      <h1>Hello and welcome to the boilerplate for NextJS. {isConnected ? "You are connected to mongo": "You are not connected to mongo"}</h1>
      <hr />
      <h3>Pages</h3>
      <p>To create a page, add a folder in the pages directory that is named after the page you are making.</p>
      <p>For example, if you are making an "About US" page, make a folder called AboutUs. Then, put a file called index.js in that directory, and you can start building thqat page!</p>
      <hr />
      <h3>APIs</h3>
      <p>To create an API endpoint, add a file named after the endpoint in the api folder.</p>
      <p>For example, if you are making an endpoint that returns the word hello, as seen in this boilerplate code, make a file called hello.js. This file will automatically be linked to the endpoint /api/hello.</p>
      <hr />
      <h3>Components</h3>
      <p>To create a React component, add a folder with the name of the component in the components directory.</p>
      <p>Its pretty much the same as a normal React app.</p>
      <hr />
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    await clientPromise
    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
