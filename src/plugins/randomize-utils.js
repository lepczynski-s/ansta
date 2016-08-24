export const randomize2 = function(value1, value2) {
    return (Math.random() >= 0.5) ? value1 : value2
}

export const randomize3 = function(value1, value2, value3) {
    var random = Math.random()

    if (random < 0.3) {
        return value1
    }
    else if (random < 0.6)
    {
        return value2
    }
    else
    {
        return value3
    }
}
