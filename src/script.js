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

const simulateDay = (recipe) => {
    let bonus = {
        sweet: false,
        cold: false,
        number: 0
    }
    if (recipe.lemons == recipe.sugar || recipe.lemons == recipe.sugar - 1) {
        bonus.sweet = true;
    }
    if (recipe.ice >= 5) {
        bonus.cold = true;
    }
    if (bonus.sweet) { bonus.number += .25 }
    if (bonus.cold) { bonus.number += .25 }
    return Math.random() * (20 - 5) + 5;
}

export { basePrice, discount }