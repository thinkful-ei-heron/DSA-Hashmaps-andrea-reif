'use strict';
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
	console.log(lotr.length, lotr.get('Hobbit'), lotr.get('Maiar'), lotr._capacity);
}

//2 WhatDoesThisDo
const WhatDoesThisDo = function() {
	let str1 = 'Hello World.';
	let str2 = 'Hello World.';
	let map1 = new HashMap();
	map1.set(str1, 10);
	map1.set(str2, 20);
	let map2 = new HashMap();
	let str3 = str1; //str1, 10
	let str4 = str2; //str2, 20
	map2.set(str3, 20); //overwrites value
	map2.set(str4, 10);

	console.log(map1.get(str1));
	console.log(map2.get(str3));
};

main();

// #3.1
//[22, 88, undefined, undefined, 4, 15, 28, 17, 59, 31, 10]
// #3.2:
//[undefined, 28 -> 19 -> 10, 20, 12, undefined, 5, 15 -> 33, undefined, 17]
