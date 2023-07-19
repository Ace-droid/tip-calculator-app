
const billInput = document.getElementById("bill");
const costomInput = document.getElementById("input-percent");
const noPeople = document.getElementById("no-people");
const percentageBtn = document.querySelectorAll(".btn");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const  resetBtn = document.getElementById("reset-btn");


resetBtn.addEventListener("click", function() {
 billInput.value = 0;
 costomInput.value = ""
 noPeople.value = 1;
 totalAmount.innerHTML = `$0.00`;
 tipAmount.innerHTML = `$0.00`;
  percentageBtn.forEach((tipBtn) => {
  tipBtn.classList.remove("remove")
 })


})


const getpercentage = () => {

  let percentageBtnValue = document.getElementsByName("percent");
  for (let i = 0; i < percentageBtnValue.length; i++){
   if(percentageBtnValue[i].checked) {
    return  percentageBtnValue[i].value
   }
 }
}


function calculatTip() {
  const billInputValue = parseFloat(billInput.value)
 
  const noPeopleValue = parseFloat(noPeople.value);
 
const totalAmountValue = parseFloat((getpercentage() / 100) * billInputValue).toFixed(2)

const tipAmountValue = parseFloat(totalAmountValue / noPeopleValue).toFixed(2)


tipAmount.innerHTML = ` $${tipAmountValue}`
totalAmount.innerHTML = ` $${totalAmountValue}`

}



billInput.addEventListener("keyup", () => {
  calculatTip()
});

noPeople.addEventListener("keyup", () => {
  calculatTip()
})
costomInput.addEventListener("keyup", () => {
  calculatTip()
})

percentageBtn.forEach( (btn) => {
  btn.addEventListener("click", (event) => {
    percentageBtn.forEach( (tipBtn) => {
      tipBtn.classList.remove("checked")
    })
    calculatTip() 
  }
  )

})



