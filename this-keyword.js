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

// function Emp1(naam,sub,detail,objII) {

//     this.name=naam
//     this.sub=sub
//     this.jaankari=detail
//     this.secondobj=objII

// }

// let emp1obj=new Emp1("arslan","hindi","all",obj={
//     name:"arshad",
//     sub:"english",
//     details:"all",

// })

// console.log(emp1obj);

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

// function Emp1(naam,sub,detail,objII) {

//     this.name=naam
//     this.sub=sub
//     this.jaankari=detail
//     this.secondobj=objII
//     console.log(this.secondobj)

// }

// let rv=new Emp1("arslan","hindi","all",()=>{console.log("jdjdjd")})


// rv.secondobj();
// console.log(rv);


// function Student(naam,umar,jaankari,Student2) {
//     this.name=naam,
//     this.age=umar,
//     this.details=jaankari
//     this.Student2=Student2
    
// }

// function Student2(kaam,name,jaankari) {
//     this.work=kaam,
//     this.naam=name,
//     this.detail=jaankari
    
// }

// let detail=new Student("arslan",18,"all")

// let alld=new Student2("aux","rohan","sub",)


// let newall = new Student("aux","rohan","sub",alld)
// console.log(newall);


//chatgpt

function Student(naam, umar, jaankari, student2) {
    this.name = naam;
    this.age = umar;
    this.details = jaankari;
    this.student2 = student2; // Use camelCase for property names
}

function Student2(kaam, naam, jaankari) {
    this.work = kaam;
    this.naam = naam;
    this.detail = jaankari;
}

// Create an instance of Student
let detail = new Student("Arslan", 18, "all");

// Create an instance of Student2
let student2Detail = new Student2("Aux", "Rohan", "sub");

// Create an instance of Student and pass the Student2 instance
let alld = new Student("Aux", 20, "sub", student2Detail);

console.log(alld);


//  hello world!!