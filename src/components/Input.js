import React from 'react';

const Input= (props) =>(
    <div className="opciones">
        <label>{props.name}:</label><br/>
        <input type="text" id={props.name}/><br/>
    </div>
    
);

export default Input;
