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

const AddBank = (amount) => {
    return {
        type: "ADD_BANK",
        bank: amount
    }
}

const AddItem = (item, amount) => {
    return {
        type: "ASS_ITEM",
        item: item,
        amount: amount
    }
}


export { setGameData, setDays, AddBank, AddItem }