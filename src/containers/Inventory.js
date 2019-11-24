import React from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

const Inventory = () => {

    const { stage, bank, cups, lemons, sugar, ice} = useSelector(state => ({
        stage: state.stage,
        bank: state.bank,
        cups: state.cups,
        lemons: state.lemons,
        sugar: state.sugar,
        ice: state.ice
    }), shallowEqual)

    const dispatch = useDispatch()

    return (
        <div>
            <h1><img src='./ingredients/lemon.png'></img> x {lemons}</h1>
            <h1><img src='./ingredients/sugar.png'></img> x {sugar}</h1>
            <h1><img src='./ingredients/ice.png'></img> x {ice}</h1>
            <h1><img src='./ingredients/cup.png'></img> x {cups}</h1>
        </div>
    )
}

Inventory.propTypes = {

}

export default Inventory





