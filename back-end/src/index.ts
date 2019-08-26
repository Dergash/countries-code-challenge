import * as Koa from 'koa';
import * as Router from 'koa-router';
import {ApolloServer, makeExecutableSchema} from 'apollo-server-koa'
import {typeDefs as countriesTypeDefs, resolvers as countriesResolvers} from './countries'
import {typeDefs as usersTypeDefs, resolvers as usersResolvers} from './users'

const port = 3001
const app = new Koa();
const router = new Router();

const schema = makeExecutableSchema({
    typeDefs: [countriesTypeDefs, usersTypeDefs],
    resolvers: [countriesResolvers, usersResolvers]
})

const apolloServer = new ApolloServer({ schema });
apolloServer.applyMiddleware({ app, path: '/graphql' })

app.use(router.routes());
app.listen(port);

console.log(`Server running on port ${port}`);
