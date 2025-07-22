//Arrays in javascript.

let myArray = [10, 20, 30, 40, 50] ;

console.log(myArray.length);
console.log(typeof myArray);

// It reserves empty spaces
myArray[10] = 100 ;

console.log(myArray)

//It returns undefined

console.log(myArray[7]) ;

// Getting the last item.

console.log(myArray[myArray.length - 1])

// Adding an item at the end

myArray[myArray[myArray.length - 1] + 1] = 200 ;

console.log(myArray);


let newArray = [1, 2, 3, 4, 5]
//Adding 0 at the beginning

newArray.unshift(0) ;
console.log(newArray) ;


// Adding item at the end

newArray.push(6) ;

console.log(newArray);

//Removing items in the beginning

newArray.shift() ;

console.log(newArray);


//Removing items at the end
newArray.pop() ;

console.log(newArray)


console.log("CLEANER SYNTAX") ;

let cars = [] ;

// Adding items

cars.push('BMW', 'Toyota', 'Mazda') ;

console.log(cars) ;

cars.unshift('Mercedes', 'Porsche', 'Suzuki') ;

console.log(cars) ;


cars.shift();
cars.pop() ;

console.log(cars) ;
