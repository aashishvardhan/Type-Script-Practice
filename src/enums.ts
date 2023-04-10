// const small = 1
// const medium = 2
// const large = 3

const enum Size { small = 's', medium = 'm', large = 'l'};
// for an enum if we don't assign any values, by default it starts assigning values from 

let mysize: Size = Size.medium
console.log(mysize)