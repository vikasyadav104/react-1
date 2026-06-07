import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'

const login =()=>{
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
 
    const {setUser}=useContext(UserContext) //this setUser is come from User Context provider which is in App.js file and we can use it to set the user data after login successfuly.
   const handleLogin=(e)=>{
    e.preventDefault()
    setUser({username,password })
    //yaha par ham login ka logic likhenge jaise ki api call karna ya fir hardcoded data se match karna
   }



    return(
        <div>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder="Username" />

        {"     "}

       
        <input type="text"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Password" />
        <button onClick={handleLogin}>Login</button>

        
        </div>


    )
}

export default login