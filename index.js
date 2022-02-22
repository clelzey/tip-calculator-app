const billElement = document.getElementById("bill")
const numPplElement = document.getElementById("num-plp")
const tipElement = document.getElementById("calculated-tip")
const totalElement = document.getElementById("calculated-total")
const tipPercentElements = document.querySelectorAll(".tip-percent")

let tipPercent = 0

tipPercentElements.forEach( i => {
   i.addEventListener('click', () => {
       console.log(`You have clicked the ${i.value}% button`)
       if (i.classList.contains('btn-active')) {
           i.classList.remove('btn-active')
           tipPercent = 0
       } else {
           tipPercentElements.forEach((item) => {
               item.classList.remove('btn-active')
           })
           i.classList.add('btn-active')
           if (i.tagName === 'INPUT') {
               console.log("you clicked custom")
               i.addEventListener("keyup", () => {
                   tipPercent = i.value
                   console.log(tipPercent)
               })
           }
           tipPercent = i.value
       }
       console.log(tipPercent)
   })

})

billElement.addEventListener("keyup", () => {
    if (numPplElement.value === ""){
        console.log("No people defined")
    } else { CalculateTip(tipPercent) }
})

numPplElement.addEventListener("keyup", () =>{
    if (billElement.value === "") {
        console.log("No bill defined")
    } else { CalculateTip(tipPercent) }
})

function CalculateTip (tip) {
    let bill = billElement.value
    let split = numPplElement.value

    let splitBill = bill / split

    let tipAmount = splitBill * ( tip / 100 )
    let totalAmount = splitBill + tipAmount

    tipElement.textContent = `$${tipAmount.toFixed(2)}`
    totalElement.textContent = `$${totalAmount.toFixed(2)}`
}

