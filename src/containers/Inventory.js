import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addBank, addItem, changeStage } from '../redux/actionCreator'
import { basePrice } from '../script'

const Inventory = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const [ error, setError ] = useState("")

    const renderShop = () => {
        let items = Object.keys(basePrice)
        return (
            <React.Fragment>
                { items.map( item => {
                    return (
                        <div>
                            <img src={`./ingredients/${item}.png`}/> X { state[`${item}`]}
                            { <button onClick={ () => buy({item: item, amount: 10})}>BUY 10 {basePrice[item] * 10}</button> }
                        </div>
                    )
                }) }
            </React.Fragment>
        )
    }

    const buy = ({item, amount}) => {
        let discount
        switch (amount) {
            case 25: discount = 0.05; break;
            case 50: discount = 0.10; break;
            default: discount = 0
        }

    }


    return (
        <div>
            { error ? error : ""}
            { renderShop() }
            <button onClick={() => dispatch(changeStage("recipe"))}>NEXT</button>
        </div>
    )
}

Inventory.propTypes = {
    bank: PropTypes.number
}

export default Inventory





