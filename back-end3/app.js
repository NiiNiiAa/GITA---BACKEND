// 1) დაწერეთ ფუნცქცია რომელიც მიიღებს მასივს არგუმენტად და დააბრუნებს ამ მასივის საშუალო არითმეტიკულს.

let nums = [10,5,8,3,6]

function averageOfNums(nums){
    let sum = 0
    for (let i = 0; i < nums.length; i++){
        sum += nums[i]
    }
    let result = sum / nums.length

    console.log(result)
}
averageOfNums(nums)




// 2) დაწერეთ ფუნცქია რომელიც პარამეტრად მიიღებს რიცხვს და დააბრუნებს ამ რიცხვის შებრუნებულ მასივს თითოეული წევრით. მაგ: 35231 → [1,3,2,5,3]. 0 => [0]
let num2 = 12345
function getArr(num2){
    let reversedNumbers = num2.toString().split("").reverse().map(Number)
    return reversedNumbers
}
console.log(getArr(num2))



// 3) დაწერეთ ფუნქცია რომელიც მიიღებს 2 მასივს არგუმენტად და დააბრუნებს მასივის მხოლოდ იმ წევრებს რომელსაც მეორე მასივი არ შეიცავს მაგ: a = [1, 2] და b = [1] დააბრუნეთ [2]. a = [1, 2, 2, 2, 3] და b = [2] დააბრუნეთ [1, 3].


let a = [1,2,3,5,8,9]
let b = [1,9]
function checkNumbers(a, b){
    let x = []
    for(let i = 0; i < a.length; i++){
        if(!b.includes(a[i])){
            x.push(a[i])
        }
    }
    return x
}
console.log(checkNumbers(a, b))



// 4) დაწერეთ ფუნცქცია რომელსაც გადმოეცემა მასივი და იპოვე მასივში მეორე ყველაზე დიდი რიცხვი. მაგ: [10, 40, 20, 5, 30] => 30

let arr1 = [5, 22, 12, 28, 7]
function getMaxNum(arr1){
    let sortNums = arr1.sort((a, b) => b - a)
    
    return sortNums[1]
}
console.log(getMaxNum(arr1))




// 5) დაწერეთ ფუნცქია რომელიც მიიღებს სტირნგების მასივს და უნდა დააბრუნოტ მხოლოდ იმ სიტყვების მასივი რომლებიც არის პალინდორმი: 
// * პალინდორმი ეწოდება სიტყვას რომელიც შემობრუნების შემდეგ იგივე მნიშვნელობას ინარჩუნებს. 
// მაგ: ["mom", "car", "level", "dog"] => ["mom", "level"]

let arr2 = ["mom", "car", "level", "dog"]
function getSame(arr2){
    let resultOf = arr2.filter(arr2 =>{
        let arr2Reversed = arr2.split("").reverse().join("")
        return arr2Reversed === arr2
    })
    return resultOf
}
console.log(getSame(arr2))


// 6)დაწერეთ ფუნცქია რომელიც მიიღებს რიცხვების მასივს და დააბრუნებთ რომელია ყველაზე ხშირად გამეორებადი რიცხვი მაგ: [4, 5, 6, 5, 4, 5] => 5

let num6= [4, 5, 6, 5, 4, 5]

function FrequentNum(num6) {
    let maxCount = 0; 
    let num7 = null;

    for (let i = 0; i < num6.length; i++) {
        let count = 0;
        for (let j = 0; j < num6.length; j++) {
            if (num6[i] === num6[j]) {
                count++;
            }
        }

        if (count > maxCount) {
            maxCount = count;
            num7 = num6[i];
        }
    }

    return num7;
}

console.log(FrequentNum(num6)); 




