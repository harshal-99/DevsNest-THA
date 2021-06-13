export function array_clone1(input) {
    return input.filter(x => x)
}

export function array_clone2(input) {
    return Array.from(input, x => x)
}

export function array_clone3(input) {
    const new_array = []
    input.forEach(element => {
        new_array.push(element)
    })
    return new_array
}

export function array_clone4(input) {
    return input.map(x => x)
}

export function array_clone5(input) {
    return input.slice()
}

export function array_clone6(input) {
    return input.splice(0, input.length)
}

export function is_array(input) {
    return input instanceof Array
}

export function first(array, n = 1) {
    return array.splice(0, n)
}

export function join_elements(array, separator = ',') {
    return array.join(separator)
}

export function max_frequency(array) {
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

// console.log(array_clone5([1, 2, 3]))

// console.log(array_clone2([1, 2, 4, 0]));
// console.log(array_clone2([1, 2, [4, 0]]));

// console.log(is_array('w3resource'))
// console.log(is_array([1, 2, 4, 0]))

// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));


// myColor = ["Red", "Green", "White", "Black"]
// console.log(join_elements(myColor))

// console.log(max_frequency([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))