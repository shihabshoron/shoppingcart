//case//
document.getElementById("case-increase").addEventListener("click", function()
{
// const caseInput = document.getElementById("case-count");
// const caseCount = parseInt(caseInput.value);//to get the current value//
// const caseNewCount = caseCount + 1; //to increase the value//
// caseInput.value = caseNewCount;//to show the new value//
// const caseTotal = caseNewCount  * 59;
// document.getElementById("case-total").innerText = "$" + caseTotal;
  handleProductChange(true);
})
document.getElementById("case-decrease").addEventListener("click",function()
{
handleProductChange(false);
  calculateTotal()
})


function handleProductChange(isIncrease)
{
const caseInput = document.getElementById("case-count");
const caseCount = parseInt(caseInput.value);
// const caseNewCount = caseCount - 1;
  let caseNewCount = caseCount;
 if(isIncrease == true)
 {
    caseNewCount = caseCount + 1;
 }
  if(isIncrease == false && caseCount > 0)
  {
    caseNewCount = caseCount-1;
  }
caseInput.value = caseNewCount;
const caseTotal = caseNewCount * 59;
document.getElementById("case-total").innerText = "$" + caseTotal;
  calculateTotal()
}

//phone//
document.getElementById("phone-increase").addEventListener("click",function(){
// const phoneInput = document.getElementById("phone-count");
// const phoneCount = parseInt(phoneInput.value);
// const newPhoneCount = phoneCount + 1;
// phoneInput.value = newPhoneCount;
// const phoneTotal = newPhoneCount * 1219;
// document.getElementById("phone-total").innerText = "$" + phoneTotal;
  phoneHandler(true);
calculateTotal()
})


document.getElementById("phone-decrease").addEventListener("click",function(){
 phoneHandler(false);
})

function phoneHandler(isIncrease)
{
const phoneInput = document.getElementById("phone-count");
const phoneCount = parseInt(phoneInput.value);
// const newPhoneCount = phoneCount - 1;
  let newPhoneCount = phoneCount;
  if(isIncrease == true)
  {
    newPhoneCount = phoneCount + 1;
  }
  if(isIncrease == false && phoneCount > 0)
  {
    newPhoneCount = phoneCount - 1;
  }
phoneInput.value = newPhoneCount;
const phoneTotal = newPhoneCount * 1219;
document.getElementById("phone-total").innerText = "$" + phoneTotal;
calculateTotal()
}

//subtotal//
function calculateTotal(){
const phoneInput = document.getElementById("phone-count");
const phoneCount = parseInt(phoneInput.value)

const caseInput = document.getElementById("case-count");
const caseCount = parseInt(caseInput.value);
  
const totalPrice = phoneCount * 1219 + caseCount * 59;
document.getElementById("total-price").innerText = "$" + totalPrice;
const tax = Math.round(totalPrice * 0.1);
document.getElementById("tax-amount").innerText = '$' + tax;
const grandTotal = totalPrice + tax;
document.getElementById("grand-total").innerText = '$' + grandTotal;

}