/**
 * - Find the bit  at any position of a number. (getBit)
 * Intuition:-
 * - Left shift 1 by the given position 
 *      - Example:- if position is 2, then left shift 1 by 2. which is 0001 -> 0100 (this is called bit masking)
 * - Perform AND operation between number and bit masked number.
 * 
 * ## How it works
 *  - If 1 is left shifted by the position, then in that 4 bit number only 1 will present in the desired position.
 *  - When I do AND operation with the bit masked number, then every bit will be 0 except that positioned bit 
 *      - If position bit was 1, then result must be non-zero value.
 *      - If position bit was 0, then result must be zero. 
 * 
 * ----------------------------------------------------------------------
 * - Set the bit at any position of a number.(setBit)
 * - Set bit means:- 
 *         If a bit is 0, make it to 1. 
 *         If a bit is 1, then keep it as 1.
 * Intuition:-
 * - Left shift 1 by the given position
 *      - Example:- if position is 2, then left shift 1 by 2. which is 0001 -> 0100 (this is called bit masking)
 * - Perform OR operation between number and bit masked number.
 * 
 * ## How it works
 * - After bit masking, When I do OR operation, then at the given position it has to be 1. as in OR (0 | 1) and (1 | 0) and (1 | 1) gives 1. That's why OR operation
 * 
 * ----------------------------------------------------------------------------
 * 
 * - Clear the bit at any position of a number. (clearBit) 
 * - Clear bit means
 *      - If bit is 1, make it to 0
 *      - If bit is 0, then keep it 0
 * - First perform NOT with bit mask result, Then AND with the number
 * - Same thing with AND and NOT operation with the number
 * 
 * ## How it works
 *  - for example:- num = 5, position = 2
 *  - 1 >> 2 // 0001 -> 0100
 *  - !0100 = 1011
 *  - 0101 & 1011 = 0001
 *  
 * -- Why NOT? Because I have to clear the bit, so in bit masking I have to make sure that given position must be 0.
 * -- Then AND? Because When I do AND operation, all bits will perform accordingly, but the given position has to be 0. 
 * 
 * -------------------------------------------------------------------------------------------------------
 * 
 * - Update the bit at any position of a number. (updateBit) 
 * - Update bit means
 *      - If bit is 1, make it to 0
 *      - If bit is 0, make it to 1
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
function getBit(num, position) {
    const bitmask = 1 << position;
    const result = bitmask & num;
    if (result == 0) {
        return false;
    }else {
        return true;
    }
}
function setBit(num, position) {
    const bitmask = 1 << position; //( if position is 1 the after masking 0001 -> 0010)
    return bitmask | num; // if num is 5 (0101 | 0010 = 0111)
}

function clearBit(num, position){
    let bitmask = 1 << position;
    bitmask = ~(bitmask);
    return bitmask & num;
}

function updateBit(num, position){
    const bit = getBit(num, position);
    let result;
    if(bit){
        result = clearBit(num, position);
    }else {
        result = setBit(num, position);
    }
    return result;
}

// console.log(getBit(5,1))
// console.log(setBit(5,1))
// console.log(clearBit(5,2))
// console.log(updateBit(5,1))


// const decimalToBinary = num =>{
//     if(num <=0) return num;
//     let str =[];
//     while(num !== 1){
//         const r = num %2;
//         num = Math.floor(num / 2);
//         str.unshift(r)
//     }
//     str.unshift(num);
//     return parseInt(str.join(""));
// }

const decimalToBinary = num => {
    if(num === 0) return '0';
    
    let binary = '';
    let temp = Math.abs(num);
    
    while(temp > 0) {
        binary = (temp & 1) + binary;
        temp = temp >> 1;
    }
    
    return num < 0 ? '-' + binary : binary;
}

console.log(decimalToBinary(7));