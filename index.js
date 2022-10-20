const btn = document.querySelectorAll('button');

//load calculation
let calculation = ("")

//get every element in the table
btn.forEach(function (btn) {
    //detect the click
    btn.addEventListener('click', (e) => {
        let userInput = e.target.textContent 
        //calcul the result
        if (userInput === "="){
            document.getElementById("output").innerHTML = eval(calculation)
            calculation = ("")
        //reset the display
        } else if (userInput === "AC"){
            calculation = ("")
            document.getElementById("output").innerHTML = "0"
        //display calculation
        }else{
            //add the clicked element to calculation
            calculation = calculation + userInput;
            document.getElementById("output").innerHTML = calculation
        }
    });
});