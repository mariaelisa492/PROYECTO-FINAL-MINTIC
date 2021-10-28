import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

export const Login = () => {
    const {loginWithRedirect} = useAuth0()
    return (
        <Link to="/products"><button onClick={()=>loginWithRedirect()}>Login</button></Link>
    )
}