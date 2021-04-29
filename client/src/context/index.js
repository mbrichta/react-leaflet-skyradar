import { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [planes, setPlanes] = useState([])

    return (
        <Context.Provider value={{ planes, setPlanes }} >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }