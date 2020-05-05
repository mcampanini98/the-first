import React from 'react';
import ProfileButton from './ProfileButton';
import '../Profile.css'

function Profile ({datos, up, down}){

    return(
        <div class="App-profile">
             <div className="Profile-img">
               <img src={datos.foto} alt="imagen"/>
            </div>
            <div className="Profile-name">
                <h2>{datos.name}</h2>
            </div>
            <div className="Profile-options">

                email: {datos.email}<br/>
                website: <a>{datos.website}</a>
            </div>
            <ProfileButton friendship={datos.friendship} id={datos.id} upp={up} dow={down}/>
        </div>
    )
}

export default Profile;