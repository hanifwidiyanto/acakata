import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    pages: {
        signIn: '/masuk',
    },
    callbacks: {
        async signIn({
            user,
            account,
            profile,
            email,
            credentials
        }) {
            return true
        },
        async redirect({
            url,
            baseUrl
        }) {
            return baseUrl
        },
        async session({
            session,
            user,
            token
        }) {
            return session
        },
        async jwt({
            token,
            user,
            account,
            profile,
            isNewUser
        }) {
            return token
        }
    }


}

export default NextAuth(authOptions)