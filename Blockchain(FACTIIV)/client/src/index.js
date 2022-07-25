import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// https://goqr.me/

//Connection with server
const client = new ApolloClient({
  uri: "http://localhost:4000/server",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    {/* Provide communication with server  */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
