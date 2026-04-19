//callback function  
function fetchData(cb){
    setTimeout(()=>{
        console.log("Data fetched");
        cb();

    },2000);

}
function processData(){
    console.log("Data processed");
}
// fetching data and then processing it using callback function
fetchData(processData);

//promise is a object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const myPromise= new Promise((res,rej)=>{
    let success=true;
    if(success){
        res("Promise resolved successfully");
    }
    else{
        rej("Promise rejected");
    }
});

myPromise.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});


// 
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getData(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
const person1=new Person("asad",24);
person1.getData();
console.log(person1.getData(    ));

//async function is a function that returns a promise and allows you to use the await keyword to wait for the promise to resolve before continuing with the execution of the code.



async function getData(){
       
       try{
        const res1=await fetch("api/data1.json");
        const data=await res1.json();
        console.log(data);
        const res2=await fetch("api/data2.json");
        const data2=await res2.json();
        console.log(data2);
       }
       catch(error){
        console.log("Error fetching data",error);
       }
}
getData();
