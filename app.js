// >> Arrow function:- ()=> { }
// let greet = () => {
//     console.log("arrow function")
// }
// greet()

//     >> High order function:-
//         Asa function jo return karhai ek function. 

// >> Callback function:-
//     "asa function jo apnay argument ma dosara function pass karhai wo hai Callback function".


// >> Array method: -

// 1.FindIndex()
// let arr = [3, 5, 7, 8, 9, 12, 11, 34, 49, 102, 125, 56, 122, 74, 98, 100]
// let Arr = arr.findIndex((e, i) => {
//     return e === 9
// })
// console.log(Arr)

// 2.Filter()
// let citiesArr = ["Karachi", "Lahore", "Islamabad", "Quetta"]
// let newarr = citiesArr.filter((e, i) => {
//     return e == "Lahore";
// })
// console.log(newarr)


// 3.forEach()
// let arr = [3, 5, 7, 8, 9, 12, 11, 34, 49, 102, 125, 56, 122, 74, 98, 100]
// let Arsh = arr.forEach((e, i) => {
//     console.log(e);
// })


// 4.Map()
// let arr = [3, 5, 7, 8, 9, 12, 11, 34, 49, 102, 125, 56, 122, 74, 98, 100]
// let Arsh = arr.map((e, i) => {
//     return 80
// })
// console.log(Arsh);

//5.Reduce()
let arr = [3, 5, 7, 8, 9, 12, 11, 34, 49, 102, 125, 56, 122, 74, 98, 100]

let element =arr.reduce((a,b)=>{
return a+b
},10)
console.log(element);







// 6.some() True or False
// let arr=[{NUM:3},{NUM:5},{NUM:7},{NUM:8},{NUM:9}]
// let Arr=arr.some((e,i) =>{
// return e.NUM ===3
// })
// console.log(Arr)


// 7.Every()
// let arr=[{NUM:3},{NUM:3},{NUM:3},{NUM:3},{NUM:3}]
// let Arr=arr.every((e,i) =>{
// return e.NUM ===3
// })
// console.log(Arr)


// >> Task # 1
// let arr = [3, 5, 7, 8, 9, 12, 11, 34, 49, 102, 125, 56, 122, 74, 98, 100]
// let Array1=arr.map((e,i)=>{
//     return e+10
// })
// console.log(Array1);

