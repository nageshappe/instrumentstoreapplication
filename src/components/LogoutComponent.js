import React from 'react'

import {Redirect} from 'react-router-dom'

const LogoutComponent=()=>{
    localStorage.clear();
    return <Redirect to="/login"/>
};

export default LogoutComponent;