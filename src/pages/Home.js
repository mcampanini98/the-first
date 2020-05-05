import React, {useState, useEffect} from 'react';
import Profile from '../components/Profile';

function Home (){
    /*Estados*/
    const [error,setError]= useState(null)
    const [isLoaded,setIsLoaded]= useState(false)
    const [profiles,setProfiles]= useState([])
    const [counter,setCounter]= useState(0)

    /*Ciclo de vida componentDidMount*/
    useEffect(
        ()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(
                (result) => {
                    result=result.map(e=>{
                        e["foto"]=`../img/${e.id}.png`
                        e["friendship"]=false
                        return e
                    })
                    setIsLoaded(true)
                    setProfiles(result)
                }
            )
            .catch(
                (error)=>{
                    setIsLoaded(true)
                    setError(error)
                    console.log(error)
                }
            )
        },
    []);

    /*Funciones para cambiar el estado de la amistad, retornan una función por perfil */
    const downHandleCreator=(id)=>{
        setCounter(counter -1)
        const profmod= profiles.map(e=>{
            if(e.id === id){
                return{...e, friendship: false}
            }else{ return e}
        })
        setProfiles(profmod)
    }
    
    const upHandleCreator=(id)=>{
        setCounter(counter +1)
        const profmod= profiles.map(e=>{
            if(e.id === id){
                return{...e, friendship: true}
            }else{ return e}
        })
        setProfiles(profmod)
        
    }

    /*Renderizado */
    if(error){
        return (
            <div> Error:{error.message}</div>
        )
    }else if(!isLoaded){
        return<div>Cargando...</div>
    }else{
        return(
            <div className="App-home">
                <div id="home-flex">
                    <h1>Home side</h1>
                    <p>usted tiene: {counter} amigos</p>
                </div>
                {profiles.map( e=> <Profile datos={e} up={()=>upHandleCreator(e.id)} down={()=>downHandleCreator(e.id)}/>)}
            </div>
        )
    }

}
export default Home;