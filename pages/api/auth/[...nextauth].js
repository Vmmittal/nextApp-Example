import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'


export const authOptions = {
    providers:[
        GithubProvider({
            clientId:'882bde82648c6a38fbbc',
            clientSecret:'e3588c5bfca6c78a0152ebf4cdabb487074ca5c5'
        }),
        GoogleProvider({
            clientId: '34150269576-kv4llhledn1c52lns1kvb51hjc1tfv5g.apps.googleusercontent.com',
            clientSecret: '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',
          })
    ]
}

export default NextAuth(authOptions)