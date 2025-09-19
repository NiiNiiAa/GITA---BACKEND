// 1) წაშალეთ მასივის თითოეულ ელემენტს წაუშლის ბოლო სიმბოლოს მაგ: ["one","two","three"] => ["on","tw","thre"]

let arr1 = ["one","two","three"]
let array1 = []

for(let i = 0; i < arr1.length; i++){
    array1.push(arr1[i].slice(0, -1))
}

console.log(array1)



// 2) იპოვეთ მასივში 2 ყველაზე პატარა ელემენტის ჯამი, მაგ: [19,5,42,2,77] => 7 

let arr2 = [19,5,42,2,77]
let array2 = arr2.sort((a, b) => a - b)
let result2 = array2[0] + array2[1]
console.log(result2)


// 3) დააჯგუფეთ მოცემული მასივი ვალუტის მიხედვით, გაითვალისწინეთ თითეუილ ვალუტის ქვეშ უნდა შეინახოთ ტრანსაქციის მნიშვნელობა. მაგ: 
// [
//   { amount: 10, currency: "USD" },
//   { amount: 20, currency: "EUR" },
//   { amount: 5,  currency: "USD" },
//   { amount: 50, currency: "EUR" }
// ]
// შედეგ: {
//   USD: [{ amount: 10 }, { amount: 5 }],
//   EUR: [{ amount: 20 }, { amount: 50 }]
// }


let currency1 = [
  { amount: 10, currency: "USD" },
  { amount: 20, currency: "EUR" },
  { amount: 5,  currency: "USD" },
  { amount: 50, currency: "EUR" }
]

let result3 = {}
for(let i = 0; i < currency1.length; i++){
    let item = currency1[i];
    
    if (!result3[item.currency]) {
        result3[item.currency] = [];
    }
    
    result3[item.currency].push({ amount: item.amount });

}

console.log(result3);

// 4) დაითვალეთ დადებითი რიცხვები და დააჯამეთ უარყოფითი რიცხვები პასუხი უნდა იყოს მასივი [10, -65]

let arr4 = [2, 20, 58, -12, -10, -28]
let positive = 0
let negative = 0

for(let i = 0; i < arr4.length; i++){
    if(arr4[i] > 0){
       positive = positive += arr4[i]
    }
    if(arr4[i] < 0){
        negative = negative += arr4[i]
    }
}
console.log([positive, negative])


// 5) გამოთვალეთ მასივის რიცხვების ჯამი ForEach ის გამოყენებით მაგ: [10, 12, 4, 2] => 28

let num5 =  [10, 12, 4, 2]
let result5 = 0

num5.forEach(num => {
    result5 += num
})

console.log(result5)



// 6) დაამუშავეთ მასივი რომ დააბრუნოს სტინგი მხოლოდ იმ ელემენტებით რომლის სიგრძე არის 5-ზე მეტი და შეაწებეთ #-ით მაგ: ["cat","parrot","dog","elephant"] => "PARROT#ELEPHANT"

let arr6 =  ["cat","parrot","dog","elephant"]

function longWords(arr6){
    let longArr  = arr6.filter(arr6 => arr6.length > 5).map(word => word.toUpperCase()).join(' # '); ;

    return longArr
}
console.log(longWords(arr6))



// 7) დააჯგუფეთ მასივი კლასის მიხედვით და გამოითვალეთ საშუალო ქულა, მაგ: 
// [
//   { name: "Ann",  cls: "A", grade: 90 },
//   { name: "Ben",  cls: "B", grade: 75 },
//   { name: "Cara", cls: "A", grade: 80 }
// ]
// შედეგი: {"A": 85, "B" 75}

let arr7 =  [
  { name: "Ann",  cls: "A", grade: 90 },
  { name: "Ben",  cls: "B", grade: 75 },
  { name: "Cara", cls: "A", grade: 80 }
]

let result7 = {};

arr7.forEach(student => {
  if (!result7[student.cls]) result7[student.cls] = [];
  result7[student.cls].push(student.grade);
});

for (let cls in result7) {
  let sum = result7[cls].reduce((a, b) => a + b, 0);
  result7[cls] = sum / result7[cls].length;
}

console.log(result7);




