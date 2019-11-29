const initialState = {
    stage: "inventory",
    bank: 20,
    day: 0,
    cups: 0,
    lemons: 0,
    sugar: 0,
    ice: 0,
    recipe: {
        lemons: 3,
        sugar: 3,
        ice: 3,
        cup: 1
    }
}


const reducer = (state, action) => {
    switch (action.type) {
        case "SET_GAME_DATA":
            return {
                ...state,
                gameData: action.gameData
            }
        case "SET_DAYS":
            return {
                ...state,
                days: action.days
            }
        case "CHANGE_STAGE":
            return {
                ...state,
                stage: action.stage
            }
        case "ADD_BANK":
            return {
                ...state,
                bank: (state.bank + action.bank)
            }
        case "ADD_ITEM":
            return {
                ...state,
                [action.item]: (state[action.item] + action.amount)
            }
        case "CHANGE_RECIPE":
            return {
                ...state,
                recipe: action.recipe
            }
        default:
            return state
    }
}

export { initialState, reducer }