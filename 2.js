function quicksort(array) {
if (array.length <= 1) {
return array;
}
var pivot = array[0];
var left = [];
var right = [];
for (var i = 1;i < array.length; i++) {
array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
} return quicksort(left).concat(pivot, quicksort(right));
};


var data = [
['T','S','Q','P','R'],
['W','U','V']
];
var hasil = quicksort(data[1]);
var hasil_1 = quicksort(data[0]);
console.log("hasil quicksort var data");
console.log(hasil);
console.log(hasil_1);

var datalain =[
['M','L','O','N'],
['T','S','Q','P','R'],
['W','U','V']
];
var hasild = quicksort (datalain[2]);
var hasild_1= quicksort (datalain[0]);
var hasild_2= quicksort (datalain[1]);
console.log("hasil quicksort var datalain")
console.log(hasild);
console.log(hasild_1);
console.log(hasild_2);