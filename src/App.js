import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';
import { GlobalStyle } from './styles';

const client = new ApolloClient({
  uri: "https://spacex-launch-stats-bcknd.herokuapp.com/graphql"
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  );
}
