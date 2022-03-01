import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import {addNewUser,getUserFromEmail} from "../../../util/mongo/mongoUsers"; 


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({token}) {
      addNewUser(token.email,token.name,token.picture); // this adds new user if not there 
      return token;
    },
    async session({session}) {
      if(session.user && !session.user._id){ // puts in user object from database instead of token 
        const user = await getUserFromEmail(session.user.email);
        session.user = user; 
      }
      return session; 
    },
  },
  secret: process.env.SECRET,    
});