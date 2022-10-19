const btn = document.querySelectorAll('button');

//load calculation
let calculation = ("")

//get every element in the table
btn.forEach(function (btn) {
    //detect the click
    btn.addEventListener('click', (e) => {
        //calcul the result
        if (e.target.textContent === "="){
            document.getElementById("output").innerHTML = eval(calculation)
            calculation = ("")
        //reset the display
        }else if (e.target.textContent === "AC"){
            calculation = ("")
            document.getElementById("output").innerHTML = "0"
        //display calculation
        }else{
            //add the clicked element to calculation
            calculation = calculation + e.target.textContent;
            document.getElementById("output").innerHTML = calculation
        }
    });
});