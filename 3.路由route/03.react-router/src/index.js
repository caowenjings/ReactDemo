import React from 'react';
import ReactDom from 'react-dom';

import App from './views/App/app'


import { BrowserRouter } from "react-router-dom";

import "./index.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDom.render(
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
    , document.getElementById('root'))


