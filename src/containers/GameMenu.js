import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setDays } from '../redux/actionCreator'


const GameMenu = () =>{

    const dispatch = useDispatch()

    const handleSelection = (days) => {
        dispatch(setDays(days))
    }

    return (
        <div>
            <h1>How long will you be open for business?</h1>
            <Link onClick={() => handleSelection(7)} to='/play'>7 days</Link>
            <Link onClick={() => handleSelection(14)} to='/play'>14 days</Link>
            <Link onClick={() => handleSelection(21)} to='/play'>21 days</Link>
        </div>
    )
}

export default (GameMenu)


