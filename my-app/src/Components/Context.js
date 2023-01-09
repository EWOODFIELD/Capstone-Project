//[AppComp 1.01]

import React, { createContext, useState} from 'react';

//[APB 1.30] Exports Created Context to Other Components
export const CustomContext = createContext();

//[APB 1.40] Create Context (Pass Current User Details to Index.js for use in Other Components)
const Context = ({children}) => {
    const [currentUser, setCurrentUser] = useState({ ID: "", UserName: '', UserPassword: ''});
    return <CustomContext.Provider value ={{currentUser, setCurrentUser}}> {children}</CustomContext.Provider>
    
}

export default Context;