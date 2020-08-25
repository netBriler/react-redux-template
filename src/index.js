import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import Service from './services/service';
import ServiceContext from './components/service-context';
import store from './store';

import './index.scss';


const service = new Service();

ReactDOM.render(
    <Provider store = {store}>
        <ErrorBoundry>
            <ServiceContext.Provider value = {service}>
                <Router>
                    <App/>
                </Router>
            </ServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root')
);

