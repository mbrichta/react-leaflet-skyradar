import { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [planes, setPlanes] = useState([])
    const [selectedPlane, setSelectedPlane] = useState();

    return (
        <Context.Provider value={{ planes, setPlanes, selectedPlane, setSelectedPlane }} >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }