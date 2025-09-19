// 1) დაწერეთ ფუნცქია რომელიც პარამეტრად მიიღებს სტრინგს და დააბრუნებს ამ სტირნგის აბრივიატურას მაგალითად getAbbr('John Doe') => "J.D"

let someStr = "nino vibliani"

function abbrOfName(someStr){
    let splitedstring = someStr.split(" ")
    let getAbbr = ""

    for (let key in splitedstring) {
        let value = splitedstring[key];
        if (typeof value === "string" && value.length > 0) {
        getAbbr += value[0].toUpperCase();
            if (key < splitedstring.length - 1) {
                getAbbr += "."
            }
        }
    }

    return getAbbr;
}
console.log(abbrOfName(someStr))


// 2) დაწერეთ ფუნცქია რომელიც არგუმენტად მიიღებს რიცხვს და დააბრუნებს ამ რიცხვების ჯამს მაგ: getSumOfDigit(123) => 6 ახსნა 1 + 2 + 3

let num = 12345

function sumOfDigit(num){
    let numToStr = num.toString()
    let sumOfNumbers = 0
    for (let i = numToStr.length - 1; i >= 0; i--){
        sumOfNumbers += Number(numToStr[i])
    }
    return sumOfNumbers
}
console.log(sumOfDigit(num))



// 3) დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს სტრინგს და წაშლის ამ სტრინგიდან ყველა გამეორებად ასოს. მაგ: removeDuplicates('banana') => 'ban'

let str1 = "banana"

function removeDuplicates(str1){
    let char = ""
    for(let i = 0; i < str1.length; i++){
        if(!char.includes(str1[i])){
            char += str1[i];
        }
    }
    return char
}
console.log(removeDuplicates(str1))


// 4) დაწერეთ ფუნქცია რომელიც წაშლის ყველა სფეისს სტრინგინდან მაგ: removeSpaces('1 2 aab') => '12aab' უნდა გამოიტენოთ for ლუპი

let str2 = '1 2 aab'
function removeSpaces(str2){
    let removed = ""
    for(let i = 0; i < str2.length; i++){
        if(str2[i] !== " "){
            removed += str2[i]
        }
    }
    return removed
}
console.log(removeSpaces(str2))



// 5) დაწერეთ ფუნცქია რომელიც მიიღებს წინადადებას და შემოაბრუნებს თითოეულ სიტყვას მაგ: reverseEachWord('Hello World') =>  "olleH dlroW"

let str3 = "hello world!"
function reverseEachWord(str3){
    let splitedStr3 = str3.split(" ")
    let charsOfStr3 = ""
    for(let i = 0; i < splitedStr3.length; i++){
    let reversedStr = splitedStr3[i].split("").reverse().join("");
    charsOfStr3 += reversedStr;

    if (i < splitedStr3.length - 1) {
        charsOfStr3 += " "; // 
    }
}

    return charsOfStr3
}

console.log(reverseEachWord(str3))

