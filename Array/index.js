/**
 * Array is a linear data structure where all elements are arranged sequentially
 *
 * In JavaScript, array can store anything, it doesn't have to be typed. i.e.
 *
 * const arr = [1, "string", true, function(){ console.log("Hello")}, null, undefined]
 */

// --------------------------------------------
/**
 * Array methods with polyfills
 */

//Push && pop
let array = [1, 2, 3, 4, 5];

//at() method
Array.prototype.customAt = function(i){
    return i >= 0 ? this[i] : this[this.length + i];
}

//concat()
Array.prototype.customConcat = function(...elements){
  let output = [...this];
  for(let ele of elements){
    if(Array.isArray(ele)){
      for(let e of ele){
        output[output.length] = e;
      }
    }else{
      output[output.length] = ele;
    }
  }
  return output;
}

//add an element at the end of the array
Array.prototype.customPush = function (...elements) {
  if (!Array.isArray(this)) {
    throw new TypeError(
      "Array.prototype.customPush called on a non-array object"
    );
  }
  for (let element of elements) {
    this[this.length] = element;
  }
  return this.length;
};
// console.log(array.customPush(null), array);

//remove an element from end
Array.prototype.customPop = function () {
  if (!Array.isArray(this)) {
    throw new TypeError(
      "Array.prototype.customPop called on a non-array object"
    );
  }
  if (this.length == 0) return undefined;
  const popped = this[this.length - 1];
  this.length = this.length - 1;
  return popped;
};
// console.log(array.customPop(), array);

//remove an element from beginning
Array.prototype.customShift = function () {
  if (!Array.isArray(this)) {
    throw new TypeError(
      "Array.prototype.customShift called on a non-array object"
    );
  }
  if (this.length == 0) return undefined;
  let shifted = this[0];
  for (let i = 1; i < this.length; i++) {
    this[i - 1] = this[i];
  }
  this.length = this.length - 1;
  return shifted;
};
// console.log(array.customShift(), array)

//add an element from beginning
Array.prototype.customUnshift = function (...elements) {
  //create space from left
  // for(let i=this.length-1; i>=0;i--){
  //     this[i + elements.length] = this[i];
  // }
  // for(let i=0;i<elements.length;i++){
  //     this[i] = elements[i]
  // }
  // return this.length;

  //in one loop
  let length = this.length + elements.length;
  for (let i = length - 1; i >= 0; i--) {
    if(i>=elements.length){
        this[i] = this[i - elements.length];
    }else{
        this[i] = elements[i]
    }
  }
  return this.length;
};
console.log(array.customUnshift(-1, 0), array);
