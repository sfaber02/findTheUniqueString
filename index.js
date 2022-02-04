const findUniq = (array) => {
    let charSet = array[0].toLowerCase().split('').sort().join('');
    //check if each string has char from set
    if(charSet.length > 0){
        for(let i = 1; i < array.length; i++){
            curr = array[i].toLowerCase().split('').sort().join('');
            for(char of curr){
                if(!(charSet.includes(char.toLowerCase()))){
                    if(i > 1){
                        return array[i];
                    }else{
                        for(let char2 of array[2]){
                            if(!(charSet.includes(char2.toLowerCase()))){
                                return array[0];
                            }else{
                                return array[1];
                            }
                        }
                    }
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



// findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]);
// findUniq([ 'foobar', 'barfo', 'fobara', '   ', 'fobra', 'oooofrab' ]);
// findUniq([ '   ', 'foobar', 'barfo', 'fobara', 'fobra', 'oooofrab' ]);
// findUniq([ 'o', 'b', 'b', 'b' ]);
findUniq( ["    ","a"," "]);

module.exports = {
    findUniq
};