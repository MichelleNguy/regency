const basePrice = {
    lemons: 0.25,
    sugar: 0.05,
    ice: 0.01,
    cups: .10
}

const discount = (amount) => {
    switch (amount) {
        case 25: return 0.05
        case 50: return 0.10
        default: return 0
    }
}

export { basePrice, discount }