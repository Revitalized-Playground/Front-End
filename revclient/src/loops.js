// forEach() - Same as map, except for, this modifies original array
    // array.forEach(eachElement => eachElement.name)

    for(i = 0; i < array.length; i++) {
        return array[i].name
    }

// map() - Same as forEach, but creates a new copy of the array
    // array.map(eachElement => eachElement.name)
    for(i = 0, i < array.length; i++) {
        let newArr = []

        newArr.push(array[i].name)

        return newArray
    }

// filter() - Returns elements according to a specific condition
    //array.filter(eachElement => eachElement.age >= 21)
    for(i = 0, i < array.length; i++) {
        let newArray = []
        if (array[i].name.toLowerCase() === 'ryan') {
            newArray.push(array[i].name)
        }

        return newArray
    }

// reduce() - Only used used with numbers. Does any type of a math function
    //array.reduce((accumulator, eachElement) => eachElement.age + accumulator)
    for(i = 0, i < array.length; i += 2) {
        let sum = 0
        sum += array[i]
        return sum
    }