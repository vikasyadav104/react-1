import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile(){
    const {user}=useContext(UserContext) //this user is come from User Context provider which is in App.js file and we can use it to get the user data after login successfuly.

    if(!user) return <h2>Please login to view your profile</h2>

    return <div> Welcome {user.username}</div>






}
export default Profile