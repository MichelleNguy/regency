const initialState = {
    bank: 100,
    day: 0,
    cups: 0,
    lemons: 0,
    sugar: 0,
    ice: 0
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
        default:
            return state
    }
}

export { initialState, reducer }