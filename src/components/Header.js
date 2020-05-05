import React from 'react';
import Search from './Search';
import {useHistory} from 'react-router-dom';

function Header (){
    const history = useHistory();
    /*Seteo de pestañas y path */
    let pages = [
        {
            name: "Home",
            link: '/'

        },
        {
            name: "Registro",
            link: '/registro'
        },
        {
            name: "Login",
            link: '/login'
        }
    ]
    /*Asignación de path para c/pestaña */
    const pagesHandle=(link)=>{
        history.push(link)
    }
    
    return (
        <div className="App-header">
            <div id="App-logo">
                <img id="logo" src="../img/icon.png" width="90px" alt="imagen"/>
            </div>
            <div id="App-path">
                <h2 id="Header-title">perfiles.com</h2>
               {pages.map(pag=> <button onClick={()=>pagesHandle(pag.link)}>{pag.name}</button>)}
            </div>
            <Search />
        </div>
    )

}
export default Header;