import React, { createContext } from 'react';
let GlobalContext = createContext();

export default function  GlobalContextProvider({ children }) {

	return (
		<GlobalContext.Provider>
				{children}
		</GlobalContext.Provider>
	)

}

