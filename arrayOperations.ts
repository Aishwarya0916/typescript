let ids: Array<number> = [23, 34, 44];
console.log(ids);
 
ids.push(12); // Adds new element to the last index of array
console.log(ids);
 
ids.sort(); // sort the array
console.log(ids);
 
ids.pop(); // Removes the element from the last index of array
console.log(ids);
 
let newIds: Array<number> = [7, 3]; 
// ids = ids.concat(newIds); // concat newIds array into ids array. 
ids = [...ids, 73, ...newIds] // … is called, spread operator.
console.log(ids);
