function range(min, max, input){

    if(min > max){
        console.log(`Minimum cannot be higher then maximum`)
    } else if ((input >= min && input <= max)){
        console.log(`${input} is in the range of ${min} and ${max}`)
    } else {
        console.log(`${input} is not in the range of ${min} and ${max}`)
    }
}