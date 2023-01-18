const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"  //store uppercase value
const lowerCase = "abcdefghijklmnopqrstuvwxyz"  //store lovercase value
const numberSet = "1234567890"                  //store number value
const symbolSet = "~!@#$%^&*()_-=+\|{}[]?/<>"    //store symbolvalue

//create selector
const passbox = document.getElementById("")
const totalChar = document.getElementById("")
const upperInpute =document.getElementById("")
const lowerInpute = document.getElementById("")
const numberInpute = document.getElementById("")
const symbolInpute = document.getElementById("")







//get rndom data from dataset
const getRandomData = (dataSet)=>{ 
    return dataSet[Math.floor(Math.rendom() * dataSet.length)]
}

 const generatePasword = (pasword = "") =>{
              if( upperInpute.checked){
                pasword += getRandomData(upperCase)
              }
              if( lowerInpute.checked){
                pasword += getRandomData(lowerCase)
              }
              if( numberInpute.checked){
                pasword += getRandomData(numberSet)
              }
              if( symbolInpute.checked){
                pasword += getRandomData(symbolSet)
              }
              if(pasword.length < totalChar.value){
                return generatePasword (pasword)
              }
              console.log(pasword);
 }


document.getElementById("btn").addEventListener(
    "check",
    function(){
        generatePasword();
    }
)