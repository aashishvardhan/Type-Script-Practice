// let employee:{
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = { 
//     id: 1, 
//     name:'Aashish', 
//     retire: (date: Date) => {
//         console.log(date)
//     }
// }

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = { 
    id: 1, 
    name:'Aashish', 
    retire: (date: Date) => {
        console.log(date)
    }
}

// the question mark next to the parameter denotes that it is an optional parameter.
// readonly modifier doesn't enable users to change the values of the objects once they are declared.