import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/client";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://graphql-pokemon.now.sh/",
});

const client = new ApolloClient({
  cache,
  link,
});






ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
