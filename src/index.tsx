import * as React from "react";
import * as ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";

import { App } from './app'
import { client } from "./appsync";

const Index: React.FC = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(
  <Index />,
  document.getElementById("root")
);