'use strict';
/* eslint-disable indent */

const HashMaps = require('./hashmap');
//Drill 1:
function main() {
	let lotr = new HashMaps();
	HashMaps.MAX_LOAD_RATIO = 0.5;
	HashMaps.SIZE_RATIO = 3;
	lotr.set('Hobbit', 'Bilbo');
	lotr.set('Hobbit', 'Frodo');
	lotr.set('Wizard', 'Gandolf');
	lotr.set('Human', 'Aragon');
	lotr.set('Elf', 'Legolas');
	lotr.set('Maiar', 'The Necromancer');
	lotr.set('Maiar', 'Sauron');
	lotr.set('RingBearer', 'Gollum');
	lotr.set('LadyOfLight', 'Galadriel');
	lotr.set('HalfElven', 'Arwen');
	lotr.set('Ent', 'Treebeard');
	// console.log(lotr.length, lotr.get('Hobbit'), lotr.get('Maiar'), lotr._capacity);
}

//2 WhatDoesThisDo
const WhatDoesThisDo = function() {
	let str1 = 'Hello World.';
	let str2 = 'Hello World.';
	let map1 = new HashMaps();
	map1.set(str1, 10);
	map1.set(str2, 20);
	let map2 = new HashMaps();
	let str3 = str1; //str1, 10
	let str4 = str2; //str2, 20
	map2.set(str3, 20); //overwrites value
	map2.set(str4, 10);

	// console.log(map1.get(str1));
	// console.log(map2.get(str3));
};

main();

// #3.1
//[22, 88, undefined, undefined, 4, 15, 28, 17, 59, 31, 10]
// #3.2:
//[undefined, 28 -> 19 -> 10, 20, 12, undefined, 5, 15 -> 33, undefined, 17]

//4 Remove duplicates
//input: 'google'
//output: 'gole
//input:  'google all that you think can think of'
function remDuplicates(str) {
	let newHash = new HashMaps();

	for (let i = 0; i < str.length; i++) {
		newHash.set(str[i], str[i]);
	}
	// console.log(newHash);
	let res = '';
	for (let i = 0; i < newHash._hashTable.length; i++) {
		if (newHash._hashTable[i]) {
			res += newHash._hashTable[i].value;
		}
	}
	// console.log(res);

	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		if (res.includes(str[i]) && !newStr.includes(str[i])) {
			newStr += str[i];
		}
	}
	return newStr;
}
// console.log(remDuplicates('google'));
// console.log(remDuplicates('google all that you think can think of'));

//5 Palindrome
function checkPalindrome(str) {
	let newHash = new HashMaps();

	for (let i = 0; i < str.length; i++) {
		newHash.set(str[i], i);
	}
	let num = 0;
	for (let i = 0; i < str.length; i++) {
		if (newHash.get(str[i]) !== i) {
			num--;
		} else {
			num++;
		}
	}
	if (num > 1) {
		return false;
	}
	return true;
}

// console.log(checkPalindrome('acecarr'));
// console.log(checkPalindrome('north'));
// console.log(checkPalindrome('dood'));
