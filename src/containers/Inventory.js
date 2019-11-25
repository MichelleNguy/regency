import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { AddBank, AddItem } from '../redux/actionCreator'

const Inventory = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const [ error, setError ] = useState("")

    const renderShop = () => {
        let items = [ "lemons", "sugar", "ice", "cups"]
        return (
            <React.Fragment>
                { items.map( item => {
                    return (
                        <div>
                            <img src={`./ingredients/${item}.png`}/> X { state[`${item}`]}
                            <button onClick={() => buyItem(item)}>BUY MORE</button>
                        </div>
                    )
                }) }
            </React.Fragment>
        )
    }

    const buyItem = (item) => {
        let prices = {
            lemons: 2.50,
            sugar: 1,
            ice: 0.10,
            cups: 1.5
        }
        if (state.bank < prices[item]) {
            setError("You can't afford that")
        } else {
            dispatch(AddBank(-prices[item]))
            dispatch(AddItem(item, 10))
        }
    }

    return (
        <div>
            { error ? error : ""}
            { renderShop() }
        </div>
    )
}

Inventory.propTypes = {
    bank: PropTypes.number
}

export default Inventory





