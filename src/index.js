import { GraphQLServer } from 'graphql-yoga'
import resolvers from './resolvers'
import database from './database'

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: {
        database,
    },
})

server.start(() => console.log('Server is up...'))
