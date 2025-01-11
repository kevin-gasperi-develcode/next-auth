import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  pages: { signIn: "/" },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "email", type: "email"},
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if(!credentials){
          return null
        };

        if(
          credentials.email === 'user@nextmail.com' &&
          credentials.password === '123456'
        ){
          return {
            id: '1',
            name: 'Kevin',
            email: 'user@nextmail.com',
          }
        }

         return null
      },
    })
  ]
})

export { handler as GET, handler as POST }