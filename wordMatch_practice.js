/*This exercise is to code a function which will be
able to take a word and locate the position of a 
chosen letter in that given word.*/

function letterFinder(word, match){
    for(var i=0; i<word.length; i++){
        if(word[i]==match){
            console.log('Found the', match, 'at', i)
        }
        else{
            console.log('---No match found at', i)
        }
    }
}
letterFinder("test", "t");

/*Your output should be the following:

Found the t at 0

---No match found at 1

---No match found at 2

Found the t at 3 */