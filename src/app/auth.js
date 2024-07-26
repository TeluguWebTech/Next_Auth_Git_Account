
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'


export const {auth, handlers:{GET, POST}} = NextAuth({
    providers:[
        GitHub({
            clientId:process.env.GIT_CLIENT_ID,
            clientSecret:process.env.GIT_SECRET
        })
    ],
    secret:process.env.AUTH_SECRET
})