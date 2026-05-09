/** Loop: Repeating over and over, round and round
 * 1. for
 * 2. while
 * 3. do while
 * // array method
 * 4. for each
 * 5. map
 * 6. filter
*/

console.log(1 * 1);
console.log(2 * 2);

/** For:
 * for(start point; condition; increment/decrement){
 * }
 */

for (let i = 1; i<=10; i++){
    console.log(i);
}

/** While loop
 * 
 * while(condition)
 * //code
 * increment/decrement
 */

let i = 1;
while(i <= 10){
    console.log(i*2);
    i++;
}

const students = ["Ram", "Hari", "Shyam", "Umesh", "Mohan"];
console.log(students[0]);
console.log(students[1]);

for (let i = 0; i < students.length; i++){
    console.log(students[i]);
}

let j = 1;
while(j < students.length){
    console.log(students[j]);
    j++;
}
