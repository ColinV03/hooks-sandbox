import React, { useState } from "react"
import UserCard from "./UserCard"





 function FetchUser() {
    const [user, setUser] = useState({})

    
     function grabUser() {
         fetch('https://swapi.dev/api/people/1/')
         .then(response => response.json())
         .then(data => setUser(data))
             
     }
    //  console.log(user);   

    return (
        <div>
            <button onClick={() => grabUser()}>Fetch User </button>
            <UserCard props={user}/>
        
        
        </div>


    )

    
}

export default FetchUser;
