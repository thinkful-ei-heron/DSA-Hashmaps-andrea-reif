'use strict';
/* eslint-disable indent */
class _Node {
	constructor(key, value, next, DELETED) {
		this.key = key;
		this.value = value;
		this.next = next;
		this.DELETED = false;
	}
}
class SCMap {
	constructor(initialCapacity = 8) {
		this.length = 0;
		this._hashTable = [];
		this._capacity = initialCapacity;
		this._deleted = 0;
	}
	get(key) {
		const index = this._findSlot(key);
		if (this._hashTable[index] === undefined) {
			throw new Error('Key error');
		}
		let currNode = this._hashTable[index];
		while (currNode.key !== key && currNode.next !== null) {
			currNode = currNode.next;
		}
		if (currNode.key === key) {
			return currNode.value;
		} else return null;
	}
	set(key, value) {
		const loadRatio = (this.length + this._deleted + 1) / this._capacity;
		if (loadRatio > SCMap.MAX_LOAD_RATIO) {
			this._resize(this._capacity * SCMap.SIZE_RATIO);
		}
		//Find the slot where this key should be in
		const index = this._findSlot(key);
		if (!this._hashTable[index]) {
			this.length++;
			this._hashTable[index] = new _Node(key, value, null);
		} else {
			let currNode = this._hashTable[index];
			while (currNode.next !== null) {
				currNode = currNode.next;
			}
			currNode.next = new _Node(key, value, null);
		}
	}
	delete(key) {
		const index = this._findSlot(key);
		const currNode = this._hashTable[index];
		if (currNode === undefined) {
			throw new Error('Key error');
		}
		if (currNode.next && currNode.key === key) {
			this._hashTable[index].next;
			return;
		}
		while (currNode.next !== null) {
			if (currNode.next.key === key) {
				currNode.next = currNode.next.next;
				return;
			}
		}
		if (currNode === key) {
			currNode.DELETED = true;
			this.length--;
			this._deleted++;
		}
	}
	_findSlot(key) {
		const hash = SCMap._hashString(key);
		const start = hash % this._capacity;
		return start;
	}
	_resize(size) {
		const oldSlots = this._hashTable;
		this._capacity = size;
		// Reset the length - it will get rebuilt as you add the items back
		this.length = 0;
		this._deleted = 0;
		this._hashTable = [];
		for (const slot of oldSlots) {
			if (slot !== undefined && !slot.DELETED) {
				this.set(slot.key, slot.value);
			}
		}
	}
	static _hashString(string) {
		let hash = 5381;
		for (let i = 0; i < string.length; i++) {
			//Bitwise left shift with 5 0s - this would be similar to
			//hash*31, 31 being the decent prime number
			//but bit shifting is a faster way to do this
			//tradeoff is understandability
			hash = (hash << 5) + hash + string.charCodeAt(i);
			//converting hash to a 32 bit integer
			hash = hash & hash;
		}
		//making sure hash is unsigned - meaning non-negtive number.
		return hash >>> 0;
	}
}
module.exports = SCMap;
