const functions = require('./index')

test(`String is not an array`, () => {
    expect(functions.is_array('w3resource')).not.toBeTruthy()
})


test('[1,2,3] is an array', () => {
    expect(functions.is_array([1, 2, 3])).toBeTruthy()
})

test('Object is not an array', () => {
    const name = {
        first: "Harshal",
        last: "Pawshekar"
    }
    expect(functions.is_array(name)).toBeFalsy()
})


test('array_clone1', () => {
    const array1 = [1, 2, 3, 4, 0]
    const array2 = [1, 2, [4, 0], {}]

    const res1 = functions.array_clone1(array1)
    const res2 = functions.array_clone1(array2)

    array1.forEach((value, index, res1) => {
        expect(value).toEqual(res1[index])
    })

    array2.forEach((value, index, res2) => {
        expect(value).toEqual(res2[index])
    })
})


test('array_clone2', () => {
    const array1 = [1, 2, 3, 4, 0]
    const array2 = [1, 2, [4, 0], {}]

    const res1 = functions.array_clone2(array1)
    const res2 = functions.array_clone2(array2)

    array1.forEach((value, index, res1) => {
        expect(value).toEqual(res1[index])
    })

    array2.forEach((value, index, res2) => {
        expect(value).toEqual(res2[index])
    })
})

test('array_clone3', () => {
    const array1 = [1, 2, 3, 4, 0]
    const array2 = [1, 2, [4, 0], {}]

    const res1 = functions.array_clone3(array1)
    const res2 = functions.array_clone3(array2)

    array1.forEach((value, index, res1) => {
        expect(value).toEqual(res1[index])
    })

    array2.forEach((value, index, res2) => {
        expect(value).toEqual(res2[index])
    })
})

test('array_clone4', () => {
    const array1 = [1, 2, 3, 4, 0]
    const array2 = [1, 2, [4, 0], {}]

    const res1 = functions.array_clone4(array1)
    const res2 = functions.array_clone4(array2)

    array1.forEach((value, index, res1) => {
        expect(value).toEqual(res1[index])
    })

    array2.forEach((value, index, res2) => {
        expect(value).toEqual(res2[index])
    })
})

test('array_clone5', () => {
    const array1 = [1, 2, 3, 4, 0]
    const array2 = [1, 2, [4, 0], {}]

    const res1 = functions.array_clone5(array1)
    const res2 = functions.array_clone5(array2)

    array1.forEach((value, index, res1) => {
        expect(value).toEqual(res1[index])
    })

    array2.forEach((value, index, res2) => {
        expect(value).toEqual(res2[index])
    })
})

test('array_clone6', () => {
    const array1 = [1, 2, 3, 4, 0]
    const array2 = [1, 2, [4, 0], {}]

    const res1 = functions.array_clone6(array1)
    const res2 = functions.array_clone6(array2)

    array1.forEach((value, index, res1) => {
        expect(value).toEqual(res1[index])
    })

    array2.forEach((value, index, res2) => {
        expect(value).toEqual(res2[index])
    })
})

test('first', () => {
    const array = [7, 9, 0, -2]

    expect(functions.first(array).length).toEqual(1)

    const result = functions.first([], 3)
    expect(result.length).toEqual(0)

    let expected = functions.first(array, 3)
    expect(expected.length).toEqual(3)
    for (let i = 0; i < 3; i++) {
        expect(array[i]).toEqual(expected[i])
    }

    expected = functions.first(array, 6)
    expect(expected.length).toEqual(4)
    for (let i = 0; i < 4; i++) {
        expect(array[i]).toEqual(expected[i])
    }

    expected = functions.first(array, -3)
    expect(expected.length).toEqual(0)
})

test('max_frequency', () => {
    const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
    expect(functions.max_frequency(arr1)).toMatch('a ( 5 times )')
})
