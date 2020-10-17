import React, { useState, useEffect, useMemo } from 'react';
import AsyncStorage from '@react-native-community/async-storage'; // local storage

const Context = React.createContext();


function ContextProvider(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState('null');

    const authContext = useMemo(() => ({
        signUp: () => {
          setUserToken('by$#jdk8a');
          setIsLoading(false);
        },
        logOut: () => {
          setUserToken(null);
          setIsLoading(false);
        }
    }));
    
      useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      },[]);

    return (
        <Context.Provider value={{
            authContext,
            isLoading,
            userToken
        }}>
            {props.children}
        </Context.Provider>
    );
}

const ContextConsumer = Context;

export { ContextProvider, ContextConsumer }
