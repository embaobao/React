import React from 'react'
import {
    render
} from 'react-dom'
import store from './base/store';

import './ui/index.css'
import App from './base/ReduxContainer';
import './base/store'
import { Provider, connect } from 'react-redux'


render( 
    <Provider store={store}>
        <App></App>    
    </Provider>
    ,
    document.getElementById('root')
)