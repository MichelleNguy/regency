import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeRecipe } from '../redux/actionCreator'

const Recipe = () => {

    const recipe = useSelector(state => state.recipe)
    const dispatch = useDispatch()

    const [ newRecipe, setNewRecipe ] = useState(recipe)

    return (
        <div>
            Lemonade Recipe that yields 5 cups:
            <p>Lemons: {newRecipe.lemons}</p>
            <p>Sugar: {newRecipe.sugar}</p>
            <p>Ice: {newRecipe.ice}</p>
        </div>
    )
}

export default Recipe
