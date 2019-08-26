import * as Koa from 'koa';
import * as Router from 'koa-router';
import {ApolloServer, gql} from 'apollo-server-koa'
import {typeDefs, resolvers} from './countries'

const port = 3001
const app = new Koa();
const router = new Router();

const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: '/graphql' })

app.use(router.routes());
app.listen(port);

console.log(`Server running on port ${port}`);
