import React from "react";
import {useParams} from "react-router-dom"

//this will work after type in url like url/User/100 then it will display user: 100 because we are using useParams hook to get the value of userid from the url and then we are displaying it in the component, so when we type url/User/100 then it will display user: 100 and if we type url/User/200 then it will display user: 200 because we are using useParams hook to get the value of userid from the url and then we are displaying it in the component, so when we type url/User/200 then it will display user: 200

function User() {
    const { userid } = useParams();
    return (
     <div className="bg-gray-600 text-white text-3xl p-4"> User: {userid} </div>
    )
}

export default User