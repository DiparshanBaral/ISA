function add(){
    var firstNumber = parseInt(document.getElementById("first").value)
    var secondNumber = parseInt(document.getElementById("second").value)

    var result = firstNumber + secondNumber
    document.getElementById("result").innerHTML = result
}