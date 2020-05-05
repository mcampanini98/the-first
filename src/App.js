import React, {Component} from 'react';
import {Link, Route, Router} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import firebase from './cofig/firebase';

/*Componentes*/
import Header from './components/Header';
import Home from './pages/Home';
import Registro from './pages/Registro'
import Login from './pages/Login'
import ProfileDetails from './pages/ProfileDetails'
import Footer from './components/Footer';



function App (){
  console.log(firebase.database())
  return(
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Route path='/' exact component={Home}/>
        <Route path='/registro' component={Registro}/>
        <Route path='/login' component={Login}/>
        <Route path='/detalle-perfil/:id' component={ProfileDetails}/>
      </BrowserRouter>
      <Footer/>
    </div>
  )

}

export default App;
