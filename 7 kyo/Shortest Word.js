Simple, given a string of words, return the length of the shortest word(s).

    String will never be empty and you do not need to account for different data types.




    function findShort(s){
    let splitS = s.split(' ')
    let a = Infinity
    for (let i = 0; i < splitS.length; i++) {
        a = Math.min(splitS[i].length, a)
    }
    return a
}

findShort("bitcoin take over the world maybe who knows perhaps")