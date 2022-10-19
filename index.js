const btn = document.querySelectorAll('button');

btn.forEach(function (btn) {
    btn.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        number = e.target.textContent;
        document.getElementById("output").innerHTML = output.textContent + number
        
    });
});