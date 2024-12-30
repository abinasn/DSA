/**
 * Get Bit operation
 * 1. Left  shift 1 << (position) which is called as Bit mask
 * 2. Do an AND operation
 *
 * Set bit
 * 1. Left shift 1<< position
 * 2. OR operation
 *
 * Clear bit
 * 1. Left shift 1<< position
 * 2. First NOT the AND
 *
 * Update bit
 * 1. Left shift 1<< position
 * 2. for 0 -> First NOT then AND => Clear
 *    for 1 -> OR -> Set bit
 */
function getBit(num, postion) {
    var bitmaskRedult = 1 << postion;
    var result = bitmaskRedult & num;
    if (result == 0) {
        return "Bit was 0";
    }
    else {
        return "Bit was 1";
    }
}
function setBit(num, postion) {
    var bitmaskRedult = 1 << postion;
    return bitmaskRedult | num;
}
console.log(setBit(5, 1));
