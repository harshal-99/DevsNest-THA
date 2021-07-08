function list_properties(object) {
    if (!object) return null
    if (!(object instanceof Object)) return null

    for (let objectKey in object) {
        if (object.hasOwnProperty(objectKey)) {
            console.log(`${objectKey}: ${object[objectKey]}`)
        }
    }
}

function delete_roll_number(object) {
    console.log("Before deleting")
    list_properties(object)
    delete object['roll_no']
    console.log()
    console.log("After deleting")
    list_properties(object)
}

function display_reading_status(library) {
    for (const libraryElement of library) {
        list_properties(libraryElement)
        console.log()
    }
}

function Cylinder(radius = 2, height = 2) {
    this.radius = radius;
    this.height = height;

    this.volume = function () {
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4)
    }
}

function sort_objects(libraries) {
    libraries.sort((auth1, auth2) =>
        auth2.libraryID - auth1.libraryID)
}

const student = {
    'name': "Batman",
    'class': '10',
    'roll_no': '46'
}

const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }]


const libraries = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    }, {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    }, {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }]