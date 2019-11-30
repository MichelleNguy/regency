import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import MainMenu from '../components/MainMenu'
import Instructions from '../components/Instructions'
import Credits from '../components/Credits'
import GameMenu from './GameMenu'
import Inventory from './Inventory'
import Recipe from './Recipe'

const MainContainer = () => {

    const gameData = useSelector(state => state)
    const dispatch = useDispatch()

    const renderPlay = () => {
        return (
            <React.Fragment>
                <h1>${gameData.bank}</h1>
                { checkStage() }
            </React.Fragment>
        )
    }

    const checkStage = () => {
        switch (gameData.stage) {
            case "inventory":
                return <Inventory />
            case "recipe":
                return <Recipe />
            case "start":
                return <Credits />
        }
    }

    return (
        <div>
            <Switch>
                <Route path="/" exact component={MainMenu} />
                <Route path="/instructions" exact component={Instructions} />
                <Route path="/credits" exact component={Credits} />
                <Route path="/menu" exact component={GameMenu} />
                <Route path="/play" exact render={ renderPlay } />
            </Switch>
        </div>
    )
}

export default MainContainer
