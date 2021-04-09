import React, { createContext } from 'react';
let SignUpContext = createContext();

export default function SignUpContextProvider({ children }) {

	return (
		<SignUpContext.Provider>
				{children}
		</SignUpContext.Provider>
	)

}
