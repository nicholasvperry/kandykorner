let locationsArray = []

export const useLocations = () => {
    return locationsArray.slice
}

export const getLocations = () => {
    return fetch('http://localhost:8088/locations')
        .then(oldLocations => oldLocations.json())
        .then(newLocations => {
            locationsArray = newLocations
        })
}

