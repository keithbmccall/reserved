/**
 * @format
 */

import React from 'react'
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {default as ApolloClient} from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {URI} from "apollo/api";


const client = new ApolloClient(({
    uri: URI
}));


const ApolloApp = () =>
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>;


AppRegistry.registerComponent(appName, () => ApolloApp);