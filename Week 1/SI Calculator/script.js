function updateRate(){
    rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;
}

function compute(){
    var p = parseInt(document.getElementById("principal").value);
    var r = parseFloat(document.getElementById("rate").value);
    var t = parseInt(document.getElementById("years").value);
    if (p<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    else{
        var interest = (p*t*r)/100;
        var amount = p + interest;
        var result = document.getElementById("result");
        var interestYear = 2023 + t;
        result.innerHTML = "If you deposit $<mark>"+ p +"</mark>, at an interest rate of <mark>" + r + "%</mark>, You will receive an amount of $<mark>" + amount + "</mark>, in the year <mark>" + interestYear + "<mark>.";
    }

}