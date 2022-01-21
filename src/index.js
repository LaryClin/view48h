import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/index.css';
import App from 'App';

import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { StyleReset } from 'atomize';

import Web3Provider from 'state'
import { NotificationsProvider } from 'contexts/NotificationsContext'

const debug = process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();
const engine = new Styletron();

ReactDOM.render(
    <React.StrictMode>
        <Web3Provider>
            <NotificationsProvider>
                <StyletronProvider value={engine} debug={debug} debugAfterHydration>
                    <StyleReset />
                    <App />
                </StyletronProvider>
            </NotificationsProvider>
        </Web3Provider>
    </React.StrictMode>,
    document.getElementById('root')
);