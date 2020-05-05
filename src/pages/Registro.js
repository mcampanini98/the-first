import React from 'react';
import Input from '../components/Input';
import {useHistory} from 'react-router-dom';



function Registro (){
    const history = useHistory();
    let input = ['Nombre','mail','website']
    
    const handleSubmit =()=>{
        alert('Gracias por registrarse')
        history.push('/')
    }
    return(
        <div className="App-registro">
            <h1>Registrarse</h1>
            <form onSubmit={()=>handleSubmit()}>
                <div className="Formulario">
                    {input.map(t=> <Input name={t}/>)}
                    <button type="onSubmit">Registrarse</button>
                </div>
            </form>
        </div>    
    )

};

export default Registro;