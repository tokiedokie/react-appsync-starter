import fetch from 'unfetch';
import { ApolloClient, InMemoryCache, HttpLink, NormalizedCacheObject } from '@apollo/client';
import awsconfig from './aws-exports';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: awsconfig.aws_appsync_graphqlEndpoint,
  fetch: fetch,
  headers: { 'X-Api-Key': awsconfig.aws_appsync_apiKey}
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
});