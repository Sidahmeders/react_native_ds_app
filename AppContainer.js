import React from 'react';
import App from './App';
import { ContextProvider } from './context';


function AppContainer() {

    return (
        <ContextProvider>
            <App />
        </ContextProvider>
    );
};

export default AppContainer;
