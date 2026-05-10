const list = [
    8, 75, 15, 45, 55, 63, 1, 25, 22, 58, 100, 105, 255,
];
console.log(list);

/** double all the numbers in the list */
const dblList = [];
for(let i = 0; i<list.length; i++){
    const dbLvalue = list[i] * 2;
    dblList.push(dbLvalue);
}
console.log(dblList);


/** Map: array.map() */
const dblMaplist = list.map(function (item, index){
const dblvalue = list * 2;
return dblvalue;
}
);
console.log(dblMaplist);


/**
 * Filter: array.filter()
 * [a, b, a, a]=> filter(a) = > [a, a, a]
 */

const evenList = [];
for(let i = 0; i<list.length; i++){
    const isEven = list[i] % 2 == 0;

    if(isEven){
        evenList.push(list[i]);
    }
}
console.log(evenList);

const filteredList = list.filter((value, index) => value % 2 == 0);
console.log(filteredList);


const students = [
    {
    name: "Ram",
    age: 25,
    faculty: "BBS" 
    },

    {
    name: "Shyam",
    age: 24,
    faculty: "BBA" 
    },

    {
    name: "Sita",
    age: 35,
    faculty: "BBS" 
    },

    {
    name: "Hari",
    age: 42,
    faculty: "BSc" 
    },
];

/** Find: array.fins()
 * [a, b, c, d] => fina(a) => a
 */

const foundResult = students.findLast((value) => value.name == "Ram");
console.log(foundResult);


/**
 * Includes: array.include(a) => boolean
 * Some: array.some(a) => boolean
 * Every: every.some(a) => boolean
 */


const includesResult = list.includes(8);
console.log(includesResult);

const someResult = list.some((value) => value >= 100);
const everyResult = list.every((value) => value >= 100);

console.log(someResult);
console.log(everyResult);

/** Sort: array.sort(a,b)
 * a-b => Asc
 * b-a => Desc
 */

list.sort((a, b) => a - b);
console.log(list);

list.sort((a, b) => b - a);
console.log(list);