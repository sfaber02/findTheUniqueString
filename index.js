const findUniq = (array) => {
    //generate unique char set from first string
    let firstArr = array[0].toLowerCase().split('').sort().join('').trim().split('');
    let charSet = [];
    if(firstArr.length > 1){
        charSet = [firstArr[0].toLowerCase()];
        let curr = charSet[0];
        for (let i = 1; i < firstArr.length ; i++){
            if (curr != firstArr[i].toLowerCase()){
                charSet.push(firstArr[i].toLowerCase());
                curr = firstArr[i];
            }else{
                curr = firstArr[i];
            }
        }
    }else{
        charSet = [];
    } 

    //check if each string has char from set
    if(charSet.length >= 1){
        for(let i = 1; i < array.length; i++){
            curr = array[i].toLowerCase().split('').sort().join('').trim().split('');
            for(char of curr){
                if(!(charSet.includes(char.toLowerCase()))){
                    return array[i];
                }
            }
        }
        return array[0];
    }else{
        for(let i = 1; i < array.length; i++){
            curr = array[i].toLowerCase().split('').sort().join('').trim().split('');
            if(curr.length > 0){
                return array[i];
            }
        }
        return array[0];
    }
}



console.log(findUniq([ '    ', 'a', ' ' ]));
// console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]));

module.exports = {
    findUniq
};