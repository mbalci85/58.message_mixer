import {
	countCharacter,
	capitalizeFirstCharacterOfWords,
	reverseString,
	reverseAllWords,
	replaceFirstOccurence,
	encode,
	palindrome,
	pigLatin,
} from './clauseMix.js';

function displayClause() {
	console.log(countCharacter('What is the color of the sky?', 't'));
	console.log(
		capitalizeFirstCharacterOfWords('What is the color of the sky?'),
	);
	console.log(reverseString('What is the color of the sky?'));
	console.log(reverseAllWords('What is the color of the sky?'));
	console.log(
		replaceFirstOccurence('What is the color of the sky?', 'sky', 'water'),
	);
	console.log(encode('What is the color of the sky?'));
	console.log(palindrome('Hello World!!!'));
	console.log(pigLatin('Biden has been selected as next POTUS', '#'));
}

displayClause();
