function findAmazingSubstrings(S) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    const amazingSubstrings = []

    for (let i = 0; i < S.length; i++) {
        if (vowels.includes(S[i])) {
            // Start a new substring with a vowel
            let substring = S[i]
            amazingSubstrings.push(substring)

            // Extend the substring with subsequent characters
            for (let j = i + 1; j < S.length; j++) {
                substring += S[j] // concat word to substring
                amazingSubstrings.push(substring)
            }
        }
    }

    return amazingSubstrings
}

// Example usage:
const string = 'ABEC'
const substrings = findAmazingSubstrings(string)
console.log(substrings);
console.log(substrings.length);