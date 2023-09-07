
let result = document.getElementById('inputbox');

function display(number){

    result.value += number;
}
function calculate(){
    let final_value = result.value;
    let final_result = eval(final_value);
    result.value = final_result;
}
function cleardisplay(){
    result.value ="";
}
function deletedigits(){
    result.value = result.value.slice(0,-1);
}
function calculatePercentage() {
display(result);
    
    if (displayValue !== '') {
        displayValue = eval(displayValue);
        displayValue = (displayValue / 100).toFixed(2);
        
    }
}