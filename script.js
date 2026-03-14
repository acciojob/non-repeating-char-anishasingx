function firstNonRepeatedChar(str) {
    let freq = {};

    // Step 1: count frequency
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Step 2: find first non-repeated
    for (let char of str) {
        if (freq[char] === 1) {
            return char;
        }
    }

    // Step 3: if none found
    return null;
}

// Test
console.log(firstNonRepeatedChar("aabbcdd")); // c
console.log(firstNonRepeatedChar("aabbcc"));  // null