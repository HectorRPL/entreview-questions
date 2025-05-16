// 6th question
// output should be single dimensional array
// en esta ni llegué porque me tardé un buen en la anterior

// this is nested array (array tridimensional (3D))
const arr = [1, 1, [1, 2], [2, 3], [3, 4, 5, [6, 7, 8]]]


const main = (multidimensionalArr = []) => {
    const result = multidimensionalArr


    return result.flat().flat()
}


console.log(main(arr));
