const checkbtn = document.querySelector("#check-btn");
const clearbtn = document.querySelector("#clear-btn");
const inp = document.querySelector("#user-input");
const out = document.querySelector("#result-div");

const regexPattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s.-]?)\d{3}([\s.-]?)\d{4}$/;

checkbtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    let val = String(inp.value).trim();
    out.innerHTML = ""; 
    if (val === "") {
        alert("Please provide a phone number.");
        return;
    }
    if (regexPattern.test(val)) {
        let pp = document.createElement('p');
        pp.textContent = `Valid US number: ${val}`;
        out.appendChild(pp);
    } 
    else {
        let pp = document.createElement('p');
        pp.textContent = `Invalid US number: ${val}`;
        out.appendChild(pp);
        console.log("Wrong answer on test 2 :(");
    }
});
clearbtn.addEventListener('click', function () {
    inp.value = "";
    out.innerHTML = ""; 
});
