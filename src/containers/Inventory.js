import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBank, addItem, changeStage } from '../redux/actionCreator'
import { basePrice, discount } from '../script'

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
                            { renderButtons(item) }
                        </div>
                    )
                }) }
            </React.Fragment>
        )
    }

    const renderButtons = (item) => {
        let counts = [ 10, 25, 50]
        return (
            <React.Fragment>
                { counts.map( count => {
                    let price = getPrice({item, count})
                    return <button onClick={() => buy({price, count, item})}>BUY {count} @ {price}</button> 
                }) }
            </React.Fragment>
        )
    }

    const getPrice = ({item, count}) => {
        let discountPercentage = discount(count)
        return ((basePrice[item] * count) * (1 - discountPercentage))
    }

    const buy = ({price, count, item}) => {
        if (state.bank < price) {
            setError("You can't afford that.")
        } else {
            dispatch(addBank(-price))
            dispatch(addItem(item, count))
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

export default Inventory





