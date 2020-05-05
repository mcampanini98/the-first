import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

function ProfileDetails (props){
    const history = useHistory();
    const[profile, setProfile]= useState([])
    const idp= props.match.params.id

    useEffect(
        ()=>{
            fetch("https://jsonplaceholder.typicode.com/users/"+ idp)
            .then(res=> res.json())
            .then(result=>{
                result["foto"]=`../img/${idp}.png`
                setProfile(result)
            })
            .catch(error=>console.log(error))
        },
    []);

    return(
        <div className="App-profdet">
            <div className="Profile-name">
                <h2>{profile.name}</h2>
            </div>
           <div className="Profile-img">
               <img src={profile.foto} alt="imagen"/>
            </div>
            <div className="Profile-options">
                email: {profile.email}
            </div>
            <div className="Profile-options">
                website: <a>{profile.website}</a>
            </div>
            <button onClick={()=>history.push('/')}>Ir a la home</button>
        </div>
    )
}
export default ProfileDetails