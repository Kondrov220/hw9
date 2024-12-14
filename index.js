 //1
 function logItems(array) {
     for(let i = 0; i < array.length; i++ ){
         console.log(`${i+1} - ${array[i]}`);
     }
 }
 logItems(['Mango', 'Poly', 'Ajax']);
 //2
 function calculateEngravingPrice(message, pricePerWord) {
  const word =  message.split(" ");
  console.log(word.length * Number(pricePerWord));
  console.log(word);
 }
 calculateEngravingPrice(prompt("Введіть повідомлення"),prompt("Введіть ціну слова"));
//3
 function findLongestWord(string) {
     let max = 0;
     let maxWord;
     const array = string.split(" ");
     for(let i = 0; i < array.length; i++){
        if(array[i].length > max){
         max = array[i].length;
         maxWord = array[i];
        }
     }
    console.log(maxWord);
 }

 findLongestWord(prompt("Введіть повідомлення"));
//4
 let strings = "";
 function formatString(string) {
     if(string.length <= 40){
         console.log(string);
     }else{
         for(let i = 0 ; i < 40; i++){
             strings += string[i];
         }
         console.log(strings.length);
         console.log(strings.padEnd(43, "."));
     }
 }

 formatString(prompt("Введіть повідомлення яке буде мати більше або менше 40 символів"));
//5
 function checkForSpam(message) {
     const tru = message.toLowerCase().includes("sale") || message.toLowerCase().includes("spam");
     console.log(tru);
 }

 checkForSpam(prompt("Введіть повідомлення"));
//6
 let input ;
 const numbers = [];
 let total = 0;
 function calculateTotal() {
   do{
     input = prompt("Введіть число")
        if (Number.isNaN(Number(input)) && input !== null) {
       alert("Було введено не число, попробуйте ще раз");
     } else {
         console.log(numbers);
       numbers.push(Number(input));
     }
   }while(input !== null);
   if(numbers.length !== 0){
     for (let i = 0; i < numbers.length; i++) {
         total += numbers[i];
       }
   }
  
     console.log(input);
   console.log(numbers);
   console.log(total);
 }
 calculateTotal();
