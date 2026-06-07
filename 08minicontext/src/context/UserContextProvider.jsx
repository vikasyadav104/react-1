import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
//ab hamne provider bhi bana liya ab hame apne app me is provider ko wrap karna hoga taki ham apne data ko share kar sake 