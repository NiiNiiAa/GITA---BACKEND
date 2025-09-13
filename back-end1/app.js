// 1) დაწერეთ ფუნცქია რომელიც გადააკონვერტირებს ცელსიუს ფარენჰეიტში და დააბრუნებს პასუხს.

let celsiusTemperature = 25;
function temperature(celsius){
    let getFarenheit = celsius * 9 / 5 + 32
    return getFarenheit
}
console.log(temperature(celsiusTemperature))



// 2) დაწერე თუნცქია რომელიც მიიღებს სტრინგს არგუმენტად და დააბრუნებს ამ სტრინგის შებრუნებულს(reverse).

let string1 = "hello, how are you?"

function reversedString(string){
    let reversed = "";
    for(let i = string.length - 1; i >= 0; i--){
        reversed += string[i]
    }
    return reversed
}

console.log(reversedString(string1))



// 3) დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს წინადადებას და დათვლის რამდენი სიტყვაა შიგნით(ეს ლექციაზე არ გაგვიკეთებია მაგრამ შეგიძლია დასერჩოთ)

let sentence = "this is a sentence"
function splitSentence(sentence){
    let wordsOfSentence = sentence.split(" ")
    return wordsOfSentence.length
}
console.log(splitSentence(sentence))


// 4) დაწერეთ ფუნცქია რომელიც პარამეტრად მიიღებს სიტყვას და დააბრუნებს რამდენი ხმოვანია ამ სიტყვაში

function countVowels (text){
     let totalvowels = ["a", "e", "i", "o", "u"];
     let count = 0;

    for(i = 0; i < text.length; i++){
        if(totalvowels.includes(text[i])){
            count++;
        } 
    }
    return count;
}
console.log(countVowels("something text"))

// 5) დაწერეთ ფუნცქია რომელიც მიიღებს რიცხვს პარამეტრად და დაგიბრუნებთ ამ რიცხვის ფაქტორიალს

function factorial (number){
    let countOf = 1;
    for(i = 2; i <= number; i++){
        countOf = countOf*i
    }
    return countOf
}
console.log(factorial(3))

// 6) დაწერეთ ფუნცქია რომლეიც მიიღებს რიცხვს პარამეტრად და დაგიბრუნებთ 0 დან ამ რიცხვამდე მხოლოდ ლუწი რიცხვების ჯამს

let num1 = 15;
let countOfSum = 0;
for(i = 0; i <= num1; i++){
    if(i % 2 === 0){
        countOfSum = countOfSum + i
    }
} 
console.log(countOfSum)

// 7) დაწერეთ ფუნცქია რომელიც მიიღებს სტუდენტის ქულას არგუმენტად და დაგირბუნებთ სტუდენტის შეფასებას A,B,C,E,F

let studentScore = 95;
if(studentScore >= 90){
    console.log("A")
} else if(studentScore<= 89 && studentScore >= 80){
    console.log("B")
} else if(studentScore<= 79 && studentScore >= 70){
    console.log("C")
} else if(studentScore<= 69 && studentScore >= 60){
    console.log("D")
}else if(studentScore<= 59 && studentScore >= 50){
    console.log("E")
} else [
    console.log("f")
]



// 8) დაწერეთ ფუნცქია რომელიც მიიღებს პაროლს პარამეტრად თქვენი მიზანია შეამოწმოთ თუ არის 8 სიმბოლოზე მეტი შეიცავს რიცხვს და ერთი დიდ ასოს(capital letter)

let password = "Ssomee!2"

function validPassword(password){
    let upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let passwordSimbols = "!@#$%^&*"
    let numbersInPassword = "1234567890"

    let includesUpper = false;
    let includesSymbols = false;
    let includesnumbers = false;

    if(password.length < 8){
        console.log("min 8 letter");
        return;
    }

    for(i = 0; i < password.length; i++){
        let letter = password[i]

        if(upperCases.includes(letter)){
           includesUpper = true;
        }
        if(passwordSimbols.includes(letter)){
            includesSymbols = true
        }
        if(numbersInPassword.includes(letter)){
            includesnumbers = true
        }
    }
    if(includesUpper && includesSymbols && includesnumbers){
         console.log("includes");
    } else{
         console.log("don't includes");
    }
}

validPassword(password)


