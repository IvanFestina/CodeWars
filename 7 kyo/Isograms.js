An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter casing)



function isIsogram(str){
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        for (let x = i + 1; x < str. length; x++) {
            if (str[i] === str[x]) {
                return false;
            }
        }
    }
    return true
}
