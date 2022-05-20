import { GraphQLServer } from 'graphql-yoga'

import db from './db'

let users = []

//resolvers
const resolvers = {
    Query:{
        me: ()=> {
            return {id: 1, name: "mamta", email: "mamta@gmail.com", age: 21}
        },
        greeting:(parent, args, ctx, info)=>{
            console.log(parent, args, ctx, info)
          return `hello ${args.name}!`
        }
    },
    Mutation: {
        createUser(parent, args, ctx, info){
            let user = {id: 1}
            users.push(user)
            return {...user}
        }
    }
}

const server = new GraphQLServer({typeDefs: './src/schema.graphql', resolvers,
context:{
    db
}})
server.start(({port})=>{
    console.log('The server is up '+ port)
})