function kgToLbs(weight: number | string): number {
    // if we check for the available methods for variable weight her, we get only the common methods between the data types number and string.
    if (typeof weight === 'number') {
        return weight * 2.2
        // here the compiler knows that weight is a number so it gives all the methods for number
    }
    else {
        return parseInt(weight) * 2.2
        // similarly, here we get all the methods of string
    }
}

// | is a union operator that can be used to assign mutiple data types to a single variable. This enables us to assign multiplem datavtypes to a variable without throwing error. User can either enter the weight as a number or they can enter as a string.