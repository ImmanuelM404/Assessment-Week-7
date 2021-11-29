// Write parpragh on why results are as they are, note runtime for each function for writeCode

// Paragraph //

// Append function scales better than Insert function once the size of the array is increased. 
// Append scales better because it is not rearranging the array as the 'insert' function would be doing.
// As the array gets larger to rearrange the entire array takes more time using the unshift method, which pushes result to front of array.
// Append function using push method would simply just place result at the end of an array. 
// Rearrange wouldn't be neccessary and item will just be new final index of array.
// Insert works good with real small arrays but once size of the array is increased Append is the faster option.




const perf = require('execution-time')();


function doublerAppend(nums){  // function doubleAppend takes parameter of an array of numbers 

    let new_nums = [];  // new array is created to push the nunbers from num array into new_nums array 

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num); // new_nums array takes in orginal numbers from num array doubled 
    }       // append has faster time than insert using (unshift)

}


function doublerInsert(nums){ // does the same as function doubleAppend function but uses unshift method 

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num); // unshift method brings values from num to the beginning of nums array 
    }

}


function getSizedArray(size){ // getSizedArray takes in number (size)
    let array = [];            
    for (let i=0; i<size; i++){  // loops thorugh size number and pushes first index into new array created in function (array)
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


// 1st Test Node Runtime.js Results
        // $ node runtime.js 
        // Results for the extraLargeArray
        // insert 994.0739 ms
        // append 3.6237 ms

// 2nd Test TinyArray
    // Results for the extraLargeArray
    // insert 59.8 μs
    // append 145.7 μs

// 3rd Test SmallArray
    // Results for the extraLargeArray
    // insert 57.2 μs
    // append 138.7 μs
    // Results for the extraLargeArray
    // insert 79 μs
    // append 166.1 μs

// 4th Test MediumArray 
    // Results for the extraLargeArray
    // insert 244.6 μs
    // append 224.4 μs
    // Results for the extraLargeArray
    // insert 181.6 μs
    // append 170.8 μs

// 5th Test extraLargeArray
    // Results for the extraLargeArray
    // insert 1.1118749 s
    // append 3.5588 ms
    // Results for the extraLargeArray
    // insert 1.0278625 s
    // append 3.6541 ms

// Write parpragh on why results are as they are, note runtime for each function for writeCode



