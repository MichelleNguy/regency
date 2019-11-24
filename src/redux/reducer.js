const reducer = (state, action) => {
    switch (action.type) {
        case "SET_GAME_DATA":
            return {
                ...state,
                gameData: action.gameData
            }
        default:
            return state
    }
}

export default reducer