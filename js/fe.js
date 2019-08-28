
// Changes background color of input field, whether input is entered or not.
function checkFilled() {
	var inputVal = document.getElementById("name");
if (inputVal.value == "") {
        inputVal.style.backgroundColor = "#91191C";
    }
    else{
        inputVal.style.backgroundColor = "";
    }
}
 
checkFilled();