import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import MainMenu from '../components/MainMenu'

const MainContainer = () => {

    const gameData = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{gameData.bank}</h1>
            <Switch>
                <Route path="/" exact component={MainMenu} />
            </Switch>
        </div>
    )
}

export default MainContainer
