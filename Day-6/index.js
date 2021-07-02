function array_clone1(input) {
    if (!input) return null
    if (!(input instanceof Array)) return null
    return input.filter(x => x)
}

function array_clone2(input) {
    if (!input) return null
    if (!(input instanceof Array)) return null
    return Array.from(input, x => x)
}

function array_clone3(input) {
    if (!input) return null
    if (!(input instanceof Array)) return null
    const new_array = []
    input.forEach(element => {
        new_array.push(element)
    })
    return new_array
}

function array_clone4(input) {
    if (!input) return null
    if (!(input instanceof Array)) return null
    return input.map(x => x)
}

function array_clone5(input) {
    if (!input) return null
    if (!(input instanceof Array)) return null
    return input.slice()
}

function array_clone6(input) {
    if (!input) return null
    if (!(input instanceof Array)) return null
    return input.splice(0, input.length)
}

function array_clone7(input) {
    if (!input) return null
    if (!(input instanceof Array)) return null
    return [...input]
}

function is_array(input) {
    if (!input) return null
    return input instanceof Array
}

function first(array, n = 1) {
    if (!(array instanceof Array)) return null
    if (!array) return null
    if (n <= 0) {
        return []
    }
    return array.slice(0, n)
}

function join_elements(array, separator = ',') {
    if (!array) return null
    if (!(array instanceof Array)) return null
    return array.join(separator)
}

function max_frequency(array) {
    if (!array) return null
    if (!(array instanceof Array)) return null

    const freq = new Map()
    for (let i of array) {
        if (!freq.has(i)) {
            freq.set(i, 1)
        } else {
            freq.set(i, freq.get(i) + 1)
        }
    }

    let iterator = freq.entries()
    const result = iterator.next().value

    freq.forEach((value, key) => {
        if (result[1] < value) {
            result[0] = key
            result[1] = value
        }
    })

    return `${result[0]} ( ${result[1]} times )`
}

module.exports = {
    array_clone1: array_clone1,
    array_clone2: array_clone2,
    array_clone3: array_clone3,
    array_clone4: array_clone4,
    array_clone5: array_clone5,
    array_clone6: array_clone6,
    array_clone7: array_clone7,
    is_array: is_array,
    first: first,
    join_elements: join_elements,
    max_frequency: max_frequency,
}