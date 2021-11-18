Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

    Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false



function XO(str) {
    let array = str.split('')
    console.log(array)
    let oNum = 0;
    let xNum = 0;
    for( let i = 0; i < array.length; i++)
        if ( array[i] == 'x' || array[i] == 'X') {
            xNum +=1;
        } else if ( array[i] == 'o' || array[i] == 'O') {
            oNum +=1;
        }
    console.log(oNum)
    return oNum == xNum ? true : false
}