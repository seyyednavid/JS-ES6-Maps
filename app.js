// Maps = key-value pairs - can use ANY type as a key or value

const map1 = new Map();

// Set keys
const key1 = "some string",
  key2 = {},
  key3 = function () {};

// Set map value by key
map1.set(key1, "value of key1");
map1.set(key2, "value of key2");
map1.set(key3, "value of key3");
console.log(map1);
// Get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// count values
console.log(map1.size);

console.log("------------"); // because of display more clear and separated in console
// -----------------------------------

// Iterating maps

//  loop using for...of to get keys and value
for (let [key, value] of map1) {
  console.log(`${key}= ${value}`);
}

console.log("------------------");

// Iterate keys only
for (let key of map1.keys()) {
  console.log(key);
}

console.log("-------------");

// Iterate keys only
for (let value of map1.values()) {
  console.log(value);
}

console.log("----------");
// ----------------------------------------

//  loop with forEach

map1.forEach((value, key) => {
  console.log(`${key}= ${value}`);
});

console.log("------------");
// ------------------------------------

//  Convert set to array

// create an array of the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// create an array of the values
const ValArr = Array.from(map1.values());
console.log(ValArr);

// create an array of the values
const keyArr = Array.from(map1.keys());
console.log(keyArr);
