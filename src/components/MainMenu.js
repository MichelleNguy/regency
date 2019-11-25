import React from 'react'
import { Link } from 'react-router-dom'


const MainMenu = () => {

    return (
        <div>
            <Link to="/menu" exact>PLAY</Link>
            <Link to="/instructions" exact>INSTRUCTIONS</Link>
            <Link to="/options" exact>OPTIONS</Link>
            <Link to="/credits" exact>CREDITS</Link>
        </div>
    )
}

export default MainMenu