import React from 'react';
import { useHistory } from 'react-router-dom';

function ProfileButton (props){
    const history= useHistory()
    
    if(props.friendship){
        return(
            <div>
                <p>Son amigos!</p>
                <button className="Friendship-on" onClick={props.dow}>Dejar de ser amigos</button>
                <br/>
                <button className="Go-details" onClick={()=>history.push(`/detalle-perfil/${props.id}`)}>Ver detalle</button>
            </div>
        )
    }else{
        return(
         <div>
            <p>No eres amigos</p>
            <button className="Friendship-off" onClick={props.upp}>Ser amigo</button>
        </div>
        )
    }
}

export default ProfileButton;