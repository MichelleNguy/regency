import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MainMenu from '../components/MainMenu'
import Instructions from '../components/Instructions'
import Credits from '../components/Credits'
import GameMenu from './GameMenu'

const MainContainer = () => {

    const gameData = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{gameData.days}</h1>
            <Switch>
                <Route path="/" exact component={MainMenu} />
                <Route path="/instructions" exact component={Instructions} />
                <Route path="/credits" exact component={Credits} />
                <Route path="/menu" exact component={GameMenu} />
            </Switch>
        </div>
    )
}

export default MainContainer
