/*Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3*/


function highestRank(arr){
  var numMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (numMap[arr[i]]) {
      numMap[arr[i]]++;
    } else {
      numMap[arr[i]] = 1;
    }
  }
  var countMax = 0;
  var valueMax = 0;
  for (let element in numMap) {
    if (countMax <= numMap[element]) {
      valueMax = Math.max(element, valueMax)
      countMax = Math.max (numMap[element], countMax)
    }
  } return valueMax
}