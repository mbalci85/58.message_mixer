const ClauseMix = {};

ClauseMix.countCharacter = function (inputString, inputCharacter) {
	let count = 0;
	let string = inputString.toLowerCase();
	let character = inputCharacter.toLowerCase();
	for (let i = 0; i < string.length; i++) {
		if (string[i] === character) {
			count++;
		}
	}
	return count;
};

ClauseMix.capitalizeFirstCharacterOfWords = function (string) {
	let arr = string.split(' ');
	for (let i = 0; i < arr.length; i++) {
		let word = arr[i];
		arr[i] = word[0].toUpperCase() + word.substring(1);
	}
	return arr.join(' ');
};

ClauseMix.reverseString = function (string) {
	return string.split('').reverse().join('');
};

ClauseMix.reverseAllWords = function (sentence) {
	let words = sentence.split(' ');
	for (let i = 0; i < words.length; i++) {
		words[i] = ClauseMix.reverseString(words[i]);
	}
	return words.join(' ');
};

ClauseMix.replaceFirstOccurence = function (string, toBeReplaced, replaceWith) {
	return string.replace(toBeReplaced, replaceWith);
};

ClauseMix.replaceAllOccurrences = function (string, toBeReplaced, replaceWith) {
	return string.split(toBeReplaced).join(replaceWith);
};

ClauseMix.encode = function (string) {
	let replacementObject = { a: '@', s: '$', i: '!', o: '0' };
	for (let key in replacementObject) {
		string = ClauseMix.replaceAllOccurrences(
			string,
			key,
			replacementObject[key],
		);
	}
	return string;
};

ClauseMix.palindrome = function (str) {
	return `${str} ${ClauseMix.reverseString(str)}`;
};

ClauseMix.pigLatin = function (sentence, character) {
	return sentence.split(' ').join(character + ' ');
};

// const countCharacter = (inputString, inputCharacter) => {
// 	let count = 0;
// 	let string = inputString.toLowerCase();
// 	let character = inputCharacter.toLowerCase();
// 	for (let i = 0; i < string.length; i++) {
// 		if (string[i] === character) {
// 			count++;
// 		}
// 	}
// 	return count;
// };

// const capitalizeFirstCharacterOfWords = (string) => {
// 	let arr = string.split(' ');
// 	for (let i = 0; i < arr.length; i++) {
// 		let word = arr[i];
// 		arr[i] = word[0].toUpperCase() + word.substring(1);
// 	}
// 	return arr.join(' ');
// };

// const reverseString = (string) => {
// 	return string.split('').reverse().join('');
// };

// const reverseAllWords = (sentence) => {
// 	let words = sentence.split(' ');
// 	for (let i = 0; i < words.length; i++) {
// 		words[i] = reverseString(words[i]);
// 	}
// 	return words.join(' ');
// };

// const replaceFirstOccurence = (string, toBeReplaced, replaceWith) => {
// 	return string.replace(toBeReplaced, replaceWith);
// };

// const replaceAllOccurrences = (string, toBeReplaced, replaceWith) => {
// 	return string.split(toBeReplaced).join(replaceWith);
// };

// const encode = (string) => {
// 	let replacementObject = { a: '@', s: '$', i: '!', o: '0' };
// 	for (let key in replacementObject) {
// 		string = replaceAllOccurrences(string, key, replacementObject[key]);
// 	}
// 	return string;
// };

// const palindrome = (str) => {
// 	return `${str} ${reverseString(str)}`;
// };

// const pigLatin = (sentence, character) => {
// 	return sentence.split(' ').join(character + ' ');
// };

// export {
// 	countCharacter,
// 	capitalizeFirstCharacterOfWords,
// 	reverseString,
// 	reverseAllWords,
// 	replaceFirstOccurence,
// 	encode,
// 	palindrome,
// 	pigLatin,
// };

export default ClauseMix;
