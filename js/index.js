let mainCurrency=document.getElementById("mainCurrency");
let secCurrency=document.getElementById("secCurrency");
let fristNum=document.querySelector(".fristNum");
let secNum=document.querySelector(".secNum");
let swap=document.querySelector(".swap");
let transText=document.querySelector(".trans");

mainCurrency.addEventListener("change",changeSconedInput);
secCurrency.addEventListener("change",changeSconedInput);
fristNum.addEventListener("change",changeSconedInput);
swap.addEventListener("click",exchange)

function changeSconedInput(){
    fetchApi(mainCurrency.value,secCurrency.value);
}
async function fetchApi(fristCurrency,secondCurrency){
    let myrespose=await fetch(`https://api.exchangerate-api.com/v4/latest/${fristCurrency}`);
    let mydata=await myrespose.json();
    let objData=mydata.rates;
//     console.log(objData)
    let output=objData[`${secondCurrency}`]
//     console.log(output)
    secNum.value=+(output*fristNum.value).toFixed(2);
    transText.innerHTML=changeText(fristCurrency,output,secondCurrency)
}
fetchApi(mainCurrency.value,secCurrency.value)

function changeText(fcur,sVal,sCur){
    return `1 ${fcur} = ${sVal} ${sCur}`
}
secNum.addEventListener("change",(event)=>{
    event.preventDefault();
//     console.log(event.target)
})
function exchange(){
    [mainCurrency.value,secCurrency.value]=[secCurrency.value,mainCurrency.value];
    changeSconedInput()
}
