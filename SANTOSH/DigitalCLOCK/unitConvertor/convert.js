var feet =
 document.getElementById("feet");

var inch =
document.getElementById("inch");

function feetAdd(val)
{
    debugger;

let f = val.value;
let i= f * 12;
document.getElementById("inch").value =i;
}

function inchAdd(val)
{
    let i = val.value;
    let f = i/12;
    document.getElementById("feet").value =f;
}
