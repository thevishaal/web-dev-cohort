const word = "banana";
const freq = new Map();

for (const ch of word) {
  const chFreq = freq.get(ch) || 0;

  freq.set(ch, chFreq + 1);
}

// console.log(freq);

const word1 = "aaabebacdd";
const freq1 = new Map();

let nonRepeatingChar;
for (const ch of word1) {
  freq1.set(ch, (freq.get(ch) || 0) + 1);
}

for (const ch of word1) {
  const chFreq = freq1.get(ch);
  if (chFreq === 1) {
    nonRepeatingChar = ch;
    break;
  }
}

// console.log(nonRepeatingChar);

const arr = [1, 2, 3, 2, 4, 5, 1];
const duplicate = new Map();

const duplicateNumArr = [];
for (const num of arr) {
  duplicate.set(num, (duplicate.get(num) || 0) + 1);
}

for (const key of duplicate.keys()) {
  if (duplicate.get(key) > 1) {
    duplicateNumArr.push(key);
  }
}

// console.log(duplicateNumArr);
