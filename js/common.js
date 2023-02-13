
function getTextElementValueById(elementId){
    const totalElement = document.getElementById(elementId);
    const currentTotalString = totalElement.innerText;
    const currentTotal = parseInt(currentTotalString);
    return currentTotal;
}
function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;

}
function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal+currentCaseTotal;
    setTextElementValueById('sub-total',currentSubTotal);
    
    // calculate tax 
    const taxAmountString = (currentSubTotal*0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    // calculate fINAL 
    const finalAmount = currentSubTotal+taxAmount;
    setTextElementValueById('final-total', finalAmount);
}