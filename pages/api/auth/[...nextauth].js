import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  database: process.env.MONGODB_URI,
  callbacks: {
    session: async (session, user) => {
        console.log("ran");
        console.log(user);  
      session.id = user.id;
      return Promise.resolve(session);
    },
  },
//   secret: process.env.JWT_SECRET, 
});