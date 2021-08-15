import React, { Component } from 'react'
import {Redirect,Route} from 'react-router-dom'

 const ProtectedAdmin=({component :Cmp,...rest}) =>(

    <Route 
    {...rest}
    render={(props)=>

        localStorage.getItem('admin')? (

            <Cmp {...props}
             />
        ):
        <Redirect 
        to="/login"
        />
    }
    
    />

 );

 export default ProtectedAdmin;