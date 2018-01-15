var task = ['Gym','Guitar','Go','Java','HTML','CSS'];
var progress = ["done","to do"];
var question1 = prompt("Which task 1-6?");
var question2 = prompt("1 = done | 2 = to do?");

console.log("Today " + task[question1 - 1] + " is " + progress[question2 - 1]);
