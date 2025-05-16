'use strict'

// no se que intenté hacer, pero se ve que hice un cagadero
// no me acuerdo en que entrevista fue
function manipulateStudentRecord(obj = {}, operation = '', prop = '', newValue = '') {

	let {[prop]: oldValue, ...rest} = obj

	if (operation === 'edit' && result[prop] !== undefined) {

		result[prop] = newValue

	} else if (operation === 'delete') {

		delete result[prop]

		// const acceptableKeys = Object.keys(obj).filter(key => key!== prop)
		// acceptableKeys.forEach(key => {
		// result[key] = obj [key]
	}

	return result;
}

// esto creo que no es neceario:
/*
function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
}
*/