function reverseArray(arr){
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--){
        reversed.push(arr[i]);

    }
    return reversed;
}
console.log(reverseArray([1,2,3,4]));

//2)

function secondLargest(arr) {
let first= -Infinity, second= -Infinity;
for (let num of arr) {
if (num > first) {
second  = first;
first = num;
} else if (num >second && num < first) {
second =num;
}
}
return second === -Infinity ? null : second;
}
console.log(secondLargest([10,20,30,40]));

//3. Merge two arrays without duplicates

function mergeArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
console.log(mergeArrays([1, 2, 3], [2, 3, 4])); // Output: [1, 2, 3, 4]

//4. Find the frequency of each element in an array

function frequencyCount(arr) {
let freq = {};
for (let num of arr) {
freq[num] =(freq [num] ||0)+1;
}
return freq;
}
console.log(frequencyCount([1, 2, 2, 3, 3, 3]));

//Output: (1:1, 2:2, 3:3)

//5. Implement a manual version of the includes method

function manualIncludes (arr, value) {
for (let item of arr) {
if (item === value) return true;
}
return false;
}
console.log(manualIncludes ([1, 2, 3], 2)); // Output: true
console.log(manualIncludes([1, 2, 3], 4)); // Output: false

//6. Shift elements in an array to the left by one position

function shiftLeft(arr) {
if (arr.length=== 0) return arr;
let first = arr.shift();
arr.push(first);
return arr;
}
console.log(shiftLeft([1, 2, 3, 4])); // Output: (2, 3, 4, 11

//7. Rotate an array to the right by k steps

function rotateRight(arr, k) {
    k %= arr.length;
return arr.slice(-k).concat(arr.slice(0, -k));
}
console.log(rotateRight([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2,3

//8. Remove all duplicate elements in an array

function removeDuplicates(arr) {
return [...new Set(arr)];
 } 
 console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // Output: [1, 2, 3.4]

//9. Create a 2D array representing a multiplication table for numbers 1 to 10

function multiplicationTable() {
let table = [];
for (let i=1;i <=10; i++) {
let row= [];
for (let j =1; j <= 10; j++){
    row.push(i * j);  
}
table.push(row);
}
return table;
}
console.table(multiplicationTable());

//10. Find the intersection of two arrays

function intersection(arr1, arr2) {
return arr1.filter(item => arr2.includes(item));
}
console.log(intersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
