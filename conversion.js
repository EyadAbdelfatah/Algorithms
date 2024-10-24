function binaryConversion(number){
    let result = "";
    let remainder;
    while(number>=1){
        remainder = number % 2;
        number= Math.floor(number/2)
        if (remainder === 1){
            result+="1"

        }
        else{
            result+="0"
        }


    }
    result =  result.split('').reverse().join('');
    return result;
}
console.log(binaryConversion(73))