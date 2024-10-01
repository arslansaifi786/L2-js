// questio return kaise kare dono ko
let symmetricpairq=(arr)=>{

let symmetricpair=[];
let symmetricpair1=[];

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if (arr[i][0]==arr[j][1] && arr[i][1]==arr[j][0]) {
            symmetricpair=(arr[i])
            symmetricpair1=(arr[j])
            
           console.log(symmetricpair,symmetricpair1);
           
        }
    }
}


}

symmetricpairq([[10,20],[20,10],[30,40],[40,30],[50,60],[10,20]])



//remove duplicate element in array dry 

let arr=[10,10,20,20,30,40, 50,50,60,60]

let notunique=[];

for(let i=0; i<arr.length; i++){
    let isunique=true;
    for(let j=i+1; j<arr.length; j++){
        if ((arr[i]==arr[j])) {
           isunique=false
            
           
        }
       if (isunique) {
        notunique[notunique.length]=arr[i]
        break;
       }

      }

      }

      console.log(notunique);



    //   repeating element in array
      // question 30,40 kaise nikale 
      let repeatingelement=(arr)=>{
      
          let notunique=[]
      
          
      for(let i=0; i<arr.length; i++){
          let isunique=true;
      
          for(let j=i+1; j<arr.length; j++){
              if (!(arr[i]==arr[j])) {
      
                  isunique=false       
              }
              if (isunique) {
      
                  notunique[notunique.length]=arr[i]
      
                  break;
      
              }
      
            }
      
          }
          return notunique;
      }
      let rv =repeatingelement([10,10,20,20,30,40, 50,50,60,60])
      console.log(rv);