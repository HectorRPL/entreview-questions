const stringOne = ['das', 'y', 'fdsgadbi', 'sdfghjklwertyuiozxcvbnm,'];
const stringTwo = ['gafsdfbi', 'ojffsdala', 'medfs', 'qwertyuiopasdfghjklzxcvbnm'];

const strings = [...stringOne, ...stringTwo];

const findTheLongestObject = (stringArr = []) => {
    const length = stringArr.length;
    let stringBefore;
    let longest;

    for (let i = 0; i < length; i++) {
        const newStringSize = count(stringArr[i]);

        if (!stringBefore) {
            stringBefore = newStringSize;
        }

        if (newStringSize[1] > stringBefore[1]) {
            longest = newStringSize;
            stringBefore = newStringSize;
        }
    }

    return longest;
}

const count = (stringChain) => {
    const obj = {};
    const stringLength = stringChain.length;
    for (let i = 0; i < stringLength; i++) {
        if (obj[stringChain[i]] === undefined) {
            obj[stringChain[i]] = 1;
        } else {
            obj[stringChain[i]] = obj[stringChain[i]] + 1;
        }
    }
    return [stringChain, Object.keys(obj).length];
    // return Object.keys(obj).length;
};


console.log('LONGEST: ', findTheLongestObject(strings));
