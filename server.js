import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import jwksRsa from 'jwks-rsa';
import schema from './data/schema';
import datastore from './data/datastore';



const SECRET = jwksRsa.expressJwtSecret({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5,
  jwksUri: `https://sftech.auth0.com/.well-known/jwks.json`
});

const addViewer = async (req, res) => {
  const token = req.headers.authorization;
  console.log(req.headers.authorization)
  try {
    const { viewer } = await jwt.verify(token, SECRET, {  audience: 'https://sftech.auth0.com/api/v2/', issuer: `https://sftech.auth0.com/`, algorithms: ['RS256'] });
    req.viewer = viewer;
  } catch (err) {
    console.log(err);
  }
  req.next();
};

const GRAPHQL_PORT = 8080;

const graphQLServer = express();

graphQLServer.use(cors());
graphQLServer.use(addViewer);

graphQLServer.use('/graph', bodyParser.json(), addViewer, graphqlExpress(req => ({ schema, context: { datastore, viewer: req.viewer } })));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graph' }));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
));
