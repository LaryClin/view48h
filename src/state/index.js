import React, { createContext, useState } from 'react'

export const Web3Context = createContext(null);

export default ({ children }) => {
    const [account, setAccount] = useState(null);

    return <Web3Context.Provider value={{ account, setAccount }}>{children}</Web3Context.Provider>
};