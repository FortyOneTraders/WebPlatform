import { SessionProvider  } from "next-auth/react";

const App = ({Component, pageProps }) =>(
    <SessionProvider session={pageProps.session} >
        <Component {...pageProps}/>
    </SessionProvider>
) 

export default App; 