//let n = 10;
//while(n<=15){
//if(n==13){
//n++;
// continue;
//}
//else{ console.log(n);
//n++;
//}
//}



//Reverse the following string word by word     DONE

//let text = "the sky is blue";
//let words= text.split(" ");
//let n = words.length;
//let reverse = "";
//for(let i = n-1;i>=0;i--){
//reverse += words[i]+ " ";
//}
//
//console.log(reverse);

//An isogram is a word that has no duplicate letters      DONE
//"Algorism"
// "Password"
// "PasSword"
// "Unforgiveable"
// "Moose"
//let word = "Moose";
//let letter = word[0];
//let isRepeat = false;
//for(let j=0;j<word.length;j++){
//if (isRepeat===true) break;
//for (let i =j+1;i<word.length;i++){
//if(word[j] === word[i]){
//letter=word[j];
//isRepeat = true;
//break;
//}else {isRepeat = false;
//}
//}
//}
//if(isRepeat) console.log("The word isn’t isogram");
//else console.log("The word is Isogram");



 //Strong Password                                 NOT DONE
 let pass = "Arewehumanorarewecoders?";
 let count = 0;
 let isDigit;
 let isUpper;
 let isLower;
 let min = 8;
 let max = 20;
 for(i=0;i<pass.length;i++){
  if(pass[i]>="0" && pass[i]<="9"){
 isDigit = true;}
 }
 for(i=0;i<pass.length;i++){
   if(pass[i]>="a" && pass[i]<="z"){
  isLower = true;}
  }
  for(i=0;i<pass.length;i++){
    if(pass[i]>="A" && pass[i]<="Z"){
   isUpper = true;}
   }

  for(i=0;i<pass.length-2;i++){
  if(pass[i]==pass[i+1] && pass[i]==pass[i+2]){
   count++;
   }
   }
 if(isLower && isUpper && !isDigit){
    count++;}

else if(isLower && !isUpper && isDigit){
    count++;}

else if(!isLower && isUpper && isDigit){
    count++;}

else if(!isLower && !isUpper && isDigit){
     count+=2;}

else if(!isLower && isUpper && !isDigit){
     count+=2;}

 else if(isLower && !isUpper && !isDigit){
     count+=2;}

 else if(!isLower && !isUpper && !isDigit){
      count+=3;}

 if (pass.length < 8){
 if(count == 0){
 count += (min - pass.length)}
 else if (count >= 1){
 count = (min - pass.length)};
 }
 if (pass.length > 20){
  count += (pass.length-20)
  }
if(count > 0){
console.log(count);
}else console.log("Your password is strong");


//The sorted sentence                                  NOT DONE
//let number = 0;
//let text = "4of Fo1r pe6ople g3ood th5e the2";
//let index = 0;
//let words= text.split(" ");
//for(let j = 0;j<words.length;j++)
//for (let i = 0;i<words[j].length;i++){
//if(words[j][i]<=9 && words[j][i]>=0){
//number = words[j][i];
//
//}console.log(number);
//}


// character that repeats                                      DONE
//let word = "Isildur";
//let letter = word[0];
//let isRepeat = false;
//for(let j=0;j<word.length;j++){
//if (isRepeat===true) break;
//for (let i =j+1;i<word.length;i++){
//if(word[j] === word[i]){
//letter=word[j];
//isRepeat = true;
//break;
//}else {isRepeat = false;
//}
//}
//}
//
//if(isRepeat) console.log(letter);
//else console.log(-1);


//construct the following pattern                 DONE
//let symbol;
//for (let i=0;i<6;i++){
//for(let j=0;j<i;j++){
//symbol += "*";
//}
//console.log(symbol);
//symbol = " ";
//}








