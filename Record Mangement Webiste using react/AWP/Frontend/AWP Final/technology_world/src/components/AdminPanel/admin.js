import React, {component} from 'react'
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignInForm from './Login/Login'
import './admin.css'
function Admin() {
  return (
    <div className='container saad'><SignInForm></SignInForm></div>
  )
}

export default Admin
