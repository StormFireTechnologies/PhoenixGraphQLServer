import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import schema from './data/schema';
import datastore from './data/datastore';

const GRAPHQL_PORT = 8080;

const graphQLServer = express();

graphQLServer.use(cors());

graphQLServer.use('/graph', bodyParser.json(), graphqlExpress({ schema, context: { datastore } }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graph' }));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
));
