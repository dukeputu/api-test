const myObject = {
    fristObject: { name: 'duke', phoneNo: 8549535, email: 'myEmail', },
    fristArray: ['duke', 'phoneNo', 'email', 'phoneNo'],
    fristFunction: function fristFunction() {
        return this.fristArray[0];
    },
    name: 'duke',
    number: 8569,

}
const{fristObject,fristArray,fristFunction} =myObject;
// console.log(fristObject)

const return89 = () => 89;

const arro =(number)=>{
  return  number/17
}
const arro1 =(number1,number2)=>{
  const a=  (number1 + number2) / 2;
  return a;
}

console.log(arro1(10,2))


// জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 