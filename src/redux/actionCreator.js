const setGameData = (gameData) => {
    return {
        type: "SET_GAME_DATA",
        gameData: gameData
    }
}

const setDays = (days) => {
    return {
        type: "SET_DAYS",
        days: days
    }
}

const changeStage = (stage) => {
    return {
        type: "CHANGE_STAGE",
        stage: stage
    }
}

const addBank = (amount) => {
    return {
        type: "ADD_BANK",
        bank: amount
    }
}

const addItem = (item, amount) => {
    return {
        type: "ADD_ITEM",
        item: item,
        amount: amount
    }
}

const changeRecipe = (recipe) => {
    return {
        type: "CHANGE_RECIPE",
        recipe: recipe
    }
}


export { setGameData, setDays, changeStage, addBank, addItem, changeRecipe }