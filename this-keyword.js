// //case[1]  agar obj mein es5 ka func toh retun key of pair   

// let obj={
//     name:"arslan",
//     class:10,
//     marks:55.55,
//     details:function parentfun(params) {
//         console.log(this); 
//     }
// }

// console.log(obj.details());




// case{2} es6 obj mein window return dega {} 
// let obj1={
//     name:"arsln",
//     marks:55.55,
//     class:10,
//     details:myfun=()=>{
//         console.log(this);
        
//     }
// }
// console.log(obj1.details());

// function Employee(naam,umar,jhaadi,dept) {

//     this.name=naam
//     this.age=umar
//     this.salary=jhaadi

//     this.dept=dept;
        
//     }
    
// let Employee1=new Employee("arslan",18,800,function myfun(params) {
//     console.log("arslan");
// })
// console.log(Employee1);



// let emp1obj={
//     name:"arslan",
//     class:10,
//     marks:55.55,
//     details:"all",
//     emp2obj:{
//         name:"arshad",
//         class:12,
//         marsks:60.1
//     }

// }

function Emp1(naam,sub,detail,objII) {

    this.name=naam
    this.sub=sub
    this.jaankari=detail
    this.secondobj=objII

}

let emp1obj=new Emp1("arslan","hindi","all",obj={
    name:"arshad",
    sub:"english",
    details:"all",

})

console.log(emp1obj);




// let emp1obj={
//     name:"arslan",
//     class:10,
//     marks:55.55,
//     details:"all",
//     emp2obj:{
//         name:"arshad",
//         class:12,
//         marsks:60.1
//     }

// }