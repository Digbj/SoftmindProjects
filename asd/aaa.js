// // function ABC(){
// //  var a=10;
// // }
// // ABC();
// // console.log(a);


// // let bbb = 565;
// // var a = 100;  // global a = 100 // 10
// // function abc(){
// //     let a = 10 
// //     let b = 20;
// //     const c = 30;
// //     console.log(a);  //10
// //     console.log(b);  // 20
// //     console.log(c);  //30
// // }
// // abc();
// // console.log(a); // 100 // 10
// // console.log(b); //err
// // console.log(c); // err

// // let arr=[1,2,3,4,5]
// // if(arr.includes(8)){
// //     console.log("hi")
// // }else if(arr.includes(1)){
// //     console.log("hi")
// // }else{
// //     console.log("no")
// // }


// // let arr=[1,2,3,4,5,6]
// // let k=3;
// // let count=0;
// // for(let i=0;i<arr.length-1;i++){
// //     for(let j=i+1;j<arr.length;j++){
// //         // console.log(arr[i],arr[j])
// //         // console.log((+arr[i]+ +arr[j])%k==0)
// //         if((+arr[i]+ +arr[j])%k==0){
// //             count++;
// //         }
// //     }
// // }
// // console.log(count)

// // let arr=[1,4,4,4,5,3];
// // let map=new Map();
// // for(let i=0;i<arr.length;i++){
// //     if(map.has(arr[i])){
// //         map.get(arr[i],map.set(arr[i]))
// //     }else {
// //         map.set(arr[i],1);
// //     }
// // }
// // console.log(map);


// // let arr=[1,2,3,4,1,4];
// // let g=arr[0]
// // for(let i=0;i<arr.length;i++){
// // if(arr[i]>g){
// //     g=arr[i];  
// // }
// // }
// // let count=0;
// // for(let i=0;i<arr.length;i++){
// //     if(g==arr[i]){
// //         count++
// //     }
// // }
// // console.log(count)

// // function volume (height){
// //     return function abc(width){
// //         return function bgb(length){
// //             return height*width*length
// //         }
// //     }
// // }
// // console.log(volume(10)(9)(10));

// // function outer(a){
// //     return function inside(b){
// //         return a+b
// //     }
// // }
// // const v=outer(3);
// // console.log(v)
// // const p=v(5)
// // console.log(p);


// function abc(){
//     let m=30
//     if(m==30){
//         const a=6;
//         var b=20;
//         console.log("a,b");
//     }
//     console.log(b);
// }
// abc();
// // console.log(b);

// function find(a,b,c,v){
//     if(a.includes(v)){
//         console.log( "Electric office");
//     }else if(b.includes(v)){
//         console.log( "water Office");
//     }else if(c.includes(v)){
//         console.log( "Gov School")
//     }else{
//         console.log( "Id not found");
//     }
// }
// let v=8;
// let electricOffice=[1,2,3,4,5,6,7,8,9,10,11,12]
// let waterOffice=[13,14,15,16,17,18,19,20,21,22,23,24,25]
// let govScool=[26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]
// find(electricOffice,waterOffice,govScool,v)



//Prime number

// // 'number' will hold a random number in
// // the range [0, 99]
// const number = Math.floor(Math.random() * 100);

// // Declare 'flag' and initialize it to false.
// let flag = false;

// // Since we know that 1 is neither prime nor composite.
// if (number == 1) {
//    console.log(" 1 is neither prime nor composite");
// }

// // This is the condition we are concerned about
// // i.e. any positive number greater than 1.
// else if (number > 1) {
//    // Iterate from 2 to number/2.
//    for (let i = 2; i < number / 2; i++) {
//     // Check if 'i' divides 'number' without
//     // leaving the remainder
//     if (number % i == 0) {
//        // If yes, then set a flag to true
//        // and exit from the loop.
//        flag = true;
//        break;
//     }
//    }

//    // If the flag is found true, it means a divisor was found
//    // during the iteration.
//    if (flag == true) console.log(`${number} is not a prime number`);
//    // Otherwise, no divisor was found.
//    else console.log(`${number} is a prime number`);
// }

// // If the number is less than 1 (either 0 or negative)
// // then we can say it is not a prime number.
// else {
//    console.log(`${number} is not a prime number`);
// }





// let n=11;
// if(n<=1){
//     console.log("number is neither prime nor composite")
// }
// let flag=false;
// if(n>1){
//     for(let i=0;i<n/2;i++){
//         if(n%i==0){
//             flag=true;
//             break;
//         }
//     }
// }
// if(flag){
//     console.log("not a prime")
// }
// else{
//     console.log("its a prime number")
// }

// let arr=[1,3,4,5,7,8,10]
// let arr2=[]
// for(let i=0;i<arr.length-1;i++){
//     if(arr[i]==i+1){

//     }else
//     {
//         arr2.push(i+1);
//     }
// }
// console.log(arr2);

// function test(){
//     let a=20;
//     function child(){
//         return a+b
//     }
//     b=child();

// }
// let b=200;
// test();
// console.log(b);

// function change(a,b){
//     let temp =a;
//     a=b;
//     b=a;
//     console.log(a,b);

// }
// let x=200;
// let y=400;
// console.log("before ",x,y);
// change(x,y)
// console.log("after",x,y)


// varx=5,y=1  
// var obj ={ x:10}  
// with(obj)  
// {  
//       console.log(y)  
// }  

// let a="helo123"
// console.log(parseInt(a));

// function outer(){
//     const x=10;
//     function inner(){
//         console.log(x);
//     }
//     return inner;
// }
// const closure=outer();
// closure();

// function createCount(){
//     let count=0;
//     return function(){
//         count++
//         console.log(count);
//     };
// }
// const counter1=createCount();
// const counter2=createCount();
// counter1();
// counter2();

// function makeCounter(){
//     let count=0;
//     return{
//         increment:function(){
//             count++
//         },

//             getCount:function(){
//                 return count;
//             }
//         };
//     }
// }

// function sum(x){
//     // let x=5
//     return function(y){
//         // let y=3
//         return x+y;
//     }
// }
// const add5=sum(5);
// const add=add5(3);
// console.log(add)


// var hero={
//     name:"Ram",
//     getid:function(){
//         return this.name
//     }
// };
// var id=hero.getid;
// console.log(id())
// console.log(hero.getid())

// function foo1(){
//     return{
//         bar:"hello"
//     };
// }
// function foo2(){
//     return{
//         bar:"hello1"
//     }
// }
// console.log(foo2());

// console.log(true===1);

// var length =10;
// function fn(){
//     console.log(this.length);
// }
// var obj={
//     length:5,
//     method:function(fn){
//         fn();
//         argument[0]();
//     }
// }
// obj.method(fn,1);

// setTimeout(()=>{
//     console.log("settime out")
// },1000)
// function x(y){
//     console.log("hi")
//     y()
// }
// x(function y(){
//     console.log("I am from y")
// })

// var x=10
// console.log(x)
// let a=6;
// let sum=a*8
// console.log(Math.evaluate(sum))

// let arr=[5,3,2,1,5,6,7]
// let i=0
// while(i<arr.length){
//     if(arr[i]<3){
//         console.log(arr[i])
//     }
//     i++
// }

// let arr=[1,2,3,4,5];
// const transform=arr.map((n)=>{
//     return n*n
// })
// console.log(transform)

// var a=10;
// a=100;
// function B(){
//   var a=20
//   console.log(a);
// }
// console.log(a);
// B();
// console.log(a);
// var a
// console.log(a);

// console.log(typeof("1"-3))

// let arr=[73,67,38,33]
// let arr2=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<38){
//         arr2.push(arr[i]);
//     }else if(arr[i]%5==0||arr[i]%5==1||arr[i]%5==2){
//         arr2.push(arr[i]);
//     }else if(arr[i]%5>3){
//        console.log(arr[i]);
//     }
// }
// console.log(arr2)

// let abc=[1,2,3,2,3,4,5,6,4,5,8,9]
// let a=[]
// for(let i=0;i<abc.length;i++){
//     if(i==0){
//         a.push(abc[i])
//     }else{
//         for(let j=0;j<a.length;j++){
//             if(abc[i]>a[j]){
//                 a.push(abc[i])
//             }
//         }
//     }
// }
// console.log(a);

// let time="12:45:54PM";
// let t=time.split(":");
// let t2=t[2].slice(2,4)

// if(t2=="PM"){
//     if(t[0]==12){
//         return t.join(":").slice(0,8)
//     }else{
//         t[0]=+t[0]+12
//     return (t.join(":").slice(0,8))
//     }

// }else{
//     if(t[0]==12){
//         t[0]=+t[0]-12+'0' 
//         return t.join(":").slice(0,8)  
//     }else{
//         return t.join(":").slice(0,8)
//     }
// }



// let grades = [73, 67, 38, 33]
// let arr = []
// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= 38) {
//         if (grades[i] % 5 >= 3) {
//             grades[i] += 5 - (grades[i] % 5);
//             arr.push(grades[i]);
//         } else {
//             arr.push(grades[i]);
//         }
//     } else {
//         arr.push(grades[i]);
//     }
// }
// return arr



// let arr=[1,2,1,2,1,2,3]
// let map=new Map();

// for(let i=0;i<arr.length;i++){
// if(map.has(arr[i])){

// }else{
    
// }
// }


// let arr=[3,4,21,36,10,28,35,5,24,42]
// let low=arr[0];
// let high=arr[0];
// let cl=0;
// let ch=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>high){
//         high=arr[i];
//         ch++;
//     }else if(arr[i]<low){
//         low=arr[i];
//         cl++;
//     }
// }
// console.log(ch,cl)
// bill[ 3, 10, 2, 9 ] k 1 b 12


// let k=[4,1];
// let bill=[3,10,2,9]
// let b=7
// let t=0;

// for(let i=0;i<bill.length;i++){
//     if(i!==k[1]){
//         t=t+ +bill[i];
//     }
// }
// let act=t/2
// // console.log(act,b)
// if(act==b){ 
//     return( "Bon Appetit")
// }else{
//     return( (act-b))
// }
// _/\      _
//    \    /
//     \/\/


// let arr=["U","U","D","D","U","D","U","U"];
// let level=0
// let count=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]=="U"){
//        level++
//     }else {
//         level --
//     }
//     if(level==0){
//         if(arr[i]=="U"){
//             count++
//         }
//     }
// }
// console.log(count)


// let arr=[1,2,2,3,1,2]
// let s=[];
// for(let i=0;i<arr.length;i++){
    
//         if(arr[i]-arr[i+1]<=1){
//             s.push(arr[i]);
//         }
   
// }
// console.log(s.length)
// console.log(s)

// let k= 3

// let a=[-1,-3,-4,2]
// let count=0
// for(let i=0;i<k;i++){
//     if(a[i]<=0){
//         count++
//     }
// }
// if(count==k){
//     console.log("YES")
// }else{
//     console.log("NO")
// }

// let a=[{id:1,val:"hiii"},{id:2,val:"hiiiii"},{id:3,val:"hiiiii"}];
// const data=a.find((item)=>{
// if(item.id==3){
//     console.log(item.val);
// }
// })



// let arr=[1,2,3,4,5,6,,7]
// let even=arr.filter((a)=>{
//    if(a%2==0){
//     return a
//    }
// })
// console.log(even);