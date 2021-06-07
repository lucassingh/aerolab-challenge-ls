import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import GlobalContext from './context/GlobalContext'

ReactDOM.render(
    <GlobalContext>
        <App />
    </GlobalContext>,
    document.getElementById('root')
);

