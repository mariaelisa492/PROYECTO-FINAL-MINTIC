import React from 'react'

import { useDispatch } from 'react-redux'

import { startLogout } from '../actions/auth';

export const Home = () => {
    const dispatch = useDispatch();

    const hanleLogout = () => {
        dispatch( startLogout() )
    }
    return (
        <div>
            Yo soy el home
            <button
                className="btn"
                onClick={hanleLogout}
            >
                Logout
            </button>
        </div>
    )
}
