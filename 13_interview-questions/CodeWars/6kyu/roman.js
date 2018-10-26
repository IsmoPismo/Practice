function solution(roman){
  const romanRegex = [
                      /C(?=M)/g,
                      /C(?=D)/g,
                      /X(?=C)/g,
                      /X(?=L)/g,
                      /I(?=X)/g,
                      /I(?=V)/g,
                      /M/g,
                      /D/g,
                      /C/g,
                      /L/g,
                      /X/g,
                      /V/g,
                      /I/g,
                      ];
  const convertArray = [900, 400, 90, 40, 9, 4, 1000, 500, 100, 50, 10, 5, 1];
  let number = 0;

  for (let i = 0; i < 6; i++){
    if(romanRegex[i].test(roman)){
      roman = roman.replace(romanRegex[i], '');
      number += convertArray[i]
    }
  }
  console.log(roman);
  return number
}

console.log(solution('CMCDXCXLIXIV'));
