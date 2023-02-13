/*
1. ADD event listener to the case plus button
2. get the value inside the case number field(input field)
3.convert the number to an integer
4. calcute the new case number 
5. set the value to the case number field
*/
function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber ;
    if(isIncrease === true){
        newCaseNumber= previousCaseNumber+1;
    }
    else{
        newCaseNumber = previousCaseNumber-1;
    }
    caseNumberField.value = newCaseNumber;

    return newCaseNumber

}
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElemet = document.getElementById('case-total');
    caseTotalElemet.innerText = caseTotalPrice;

}

document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
    
});
document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
   
});

