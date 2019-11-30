import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeRecipe, changeStage } from '../redux/actionCreator'

const Recipe = () => {

    const recipe = useSelector(state => state.recipe)
    const dispatch = useDispatch()

    const [ newRecipe, setNewRecipe ] = useState(recipe)
    const [ error, setError ] = useState("")

    const editRecipe = ({item, add}) => {
        if (add) {
            setNewRecipe({...newRecipe, [item]: newRecipe[item] + 1})
        } else {
            if (newRecipe[item] == 0) { setError("The recipe cannot have negative ingredients."); return}
            setNewRecipe({ ...newRecipe, [item]: newRecipe[item] - 1 })
        }
        
    }

    const renderRecipe = () => {
        let items = Object.keys(newRecipe)
        return (
            <React.Fragment>
                {items.map( item => {
                    return (<div>
                        {item} : <button onClick={() => editRecipe({ item: item, add: false })}>{`<`}</button >{newRecipe[item]}<button onClick={() => editRecipe({ item: item, add: true })}>{`>`}</button>
                    </div>)
                })}
            </React.Fragment>
        )
    }

    const nextStage = () => {
        dispatch(changeRecipe(newRecipe))
        dispatch(changeStage("start"))
    }

    return (
        <div>
            { error ? error : ""}
            <p>Lemonade Recipe that yields 5 cups:</p>
            {renderRecipe()}
            <button onClick={ nextStage }>next</button>
        </div>
    )
}

export default Recipe
