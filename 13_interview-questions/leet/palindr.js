function isPalin(s) {
    const re = /[^A-Za-z]/g
    const str = s.replace(re ,'').toLowerCase()
    const len = str.length

    console.log(str);

    for(let i = 0; i < len / 2; i++){
        if(str[i] !== str[len - i - 1]){
            console.log(str[i], str[len - i]);
            return false
        }
    }
    return true
};

console.log(isPalin("A man, a plan, a canal: Panama"));
