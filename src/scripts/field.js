
const allPlants = [];

export const addPlant = (addSeed) => {
    if (addSeed.isArray() === true) {
        for (const seed of addSeed) {
            return allPlants.push(seed)
        } 
    } else { return allPlants.push(addSeed) }
}

export const usePlants = () => {
    return allPlants.map()
}