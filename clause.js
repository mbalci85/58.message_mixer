// import {
// 	countCharacter,
// 	capitalizeFirstCharacterOfWords,
// 	reverseString,
// 	reverseAllWords,
// 	replaceFirstOccurence,
// 	encode,
// 	palindrome,
// 	pigLatin,
// } from './clauseMix.js';

import ClauseMix from './clauseMix.js';

function displayClause() {
	console.log(ClauseMix.countCharacter('What is the color of the sky?', 't'));
	console.log(
		ClauseMix.capitalizeFirstCharacterOfWords(
			'What is the color of the sky?',
		),
	);
	console.log(ClauseMix.reverseString('What is the color of the sky?'));
	console.log(ClauseMix.reverseAllWords('What is the color of the sky?'));
	console.log(
		ClauseMix.replaceFirstOccurence(
			'What is the color of the sky?',
			'sky',
			'water',
		),
	);
	console.log(ClauseMix.encode('What is the color of the sky?'));
	console.log(ClauseMix.palindrome('Hello World!!!'));
	console.log(
		ClauseMix.pigLatin('Biden has been selected as next POTUS', '#'),
	);
}

displayClause();
