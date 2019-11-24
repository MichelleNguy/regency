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


export { setGameData, setDays }