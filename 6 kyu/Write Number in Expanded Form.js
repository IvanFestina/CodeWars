Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
\





function expandedForm(num) {
let multiple = 10;
let result = [];
while (num > 1) {
  let remainder = num%multiple;
  if(remainder > 0) {
    result.unshift(remainder);
  } 
  num -= remainder;
  multiple = multiple * 10;
} 
  return result.join(' + ');
}