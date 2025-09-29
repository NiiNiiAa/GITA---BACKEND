// 1) რა თანმიმდევრობით დაილოგება შემდეგი ინსტრუქციები: 

// console.log("1"); // პირველი, რადგან არ აქვს გაწერილი დრო
// setTimeout(() => console.log("2"), 100);   // მეხუთედ, რადგან 100ms აქვს გაწერილი
// setTimeout(() => console.log("3"), 0);    // მეოთხედ , რადგან setTimeout() აქვს გაწერილი, მიუხედავად იმისა, რომ დრო უწერია 0
// Promise.resolve().then(() => console.log("4"));    // მესამედ დაილოგება ეს, რადგან setTimeout()-ამდე ილოგება
// console.log("5");     // // მეორე, რადგან არ აქვს გაწერილი დრო და სანამ ზემოთ დაწერილი კოდი შესრულდება, დაილოგება ეს კოდი




// 2) რა თანმიმდევრობით დაილოგება შემდეგი ინსტრუქციები: 
// console.log("1");       //  პირველი, რადგან სინქრონულად მოყვბა
// setTimeout(() => console.log("2"), 0);   //  მეოთხე, რადგან ეს პირობა შესრულდება console.log-ის და Promise.resolve()-ის შემდეგ, მაგრამ Promise.resolve()-ში გაწერილ setTimeout()-მდე 
// Promise.resolve().then(() => {
//   console.log("3");      //   მესამდე, რადგან setTimeout() - ცალკე გაწერილი არ აქვს
//   setTimeout(() => console.log("4"), 0);     //   მეხუთე, რადგან ჯერ შესრულდება Promise.resolve() -ის გარეთ დაწერილი setTimeout()
// });
// console.log("5");  // მეორე, რადგან არანაირი პირობა არ აქვს გაწერილი და პირდაპირ დაილოგება, სანამ ზემოთ დაწერილი კოდი შესრულდება




// 3) დაწერეთ სლიფ ფუნქცია რომელიც პარამეტრად მიიღებს მილიწამს და დაიძინებს, ანუ სისტემა გაჩერდება პარამეტრის მიხედვით. await sleep(1000) 
// სადაც ამ ფუნცქიას გამოიყენებთ 1 წამი უნდა გაჩერდეს ხოლმე სისტემა, გაითვალისწინეთ await ით უნდა გააჩეროთ ანუ პრომისი უნდა დააბრუნოს ფუნქციამ

// function sleepFunction(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function demo() {
//   await sleepFunction(1000); 
//     console.log("გავიდა 1 წამი")
// }

// demo();



// 4) დაწერეთ ფუნცქია რომელიც პარამეტრად მიიღებს რიცხვს 1-დან 20-მდე თქვენი მიზანია ფუნცქიის შიგნით ფუნქციამ ყოველ 1 წამში რენდომ რიცხვი დააგენერიროს 
// მანამ სანამ რენდომ დაგენერირებული რიცხვი არ დამეთხვევა პარამეტს, როგორც კი ისინი ერთმანეთს დაემთხვევა გააჩერეთ რენდომ რიცხვის დალოგვა.


// function sleepFunction2(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function findRendomNum(randomNumber) {
//     const printed = new Set();
//     let num;
//     while (num !== randomNumber) {
//         await sleepFunction2(1000);            
//         num = Math.floor(Math.random() * 20) + 1; 

//         if (!printed.has(num)) { 
//             console.log(num);
//             printed.add(num);
//         }
//     }

//     console.log(`ჩაფიქრებული რიცხვი იყო ${randomNumber}`)
// }

// findRendomNum(5);



// 5) დაწერეთ ფუნცქია რომელსაც გადაეცემა 2 პარამეტრი 1 - ნებისმიერი რიცხვი 2 - დროის ერთეული მილიწამებში, თქვენი მიზანია დალოგოთ რიცხვები ამ 
// რიცხვიდან 0 მდე იმ დროის ინტერვალში რაც არის მეორე პარამეტრი და 0ზე გააჩეროთ.

function newSleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function numbers(first, Ms) {
  for (let i = first; i >= 0; i--) {
    console.log(i);
    if (i > 0) {           
      await newSleep(Ms);
    }
  }
}

numbers(5, 700);



