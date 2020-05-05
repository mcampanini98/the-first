import React from 'react';
import Input from '../components/Input';
import {useHistory} from 'react-router-dom';

function Login (){
    const history = useHistory();
    const input = ['Nombre', 'Contraseña']
    const handleSubmit =()=>{
        alert('Bienvenido a la pagina')
        history.push('/')
    }
    return(
        <div className="App-login">
            <h1>Login</h1>
            <form onSubmit={()=>handleSubmit()}>
                <div className="Formulario">
                    {input.map(t=> <Input name={t}/>)}
                    
                </div> 
                <button type="onSubmit">Logear</button>
            </form>
        </div>
    )
}
export default Login;