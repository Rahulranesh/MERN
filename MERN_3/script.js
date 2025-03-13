document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calcForm").addEventListener("submit", function (event) {
        event.preventDefault(); 

        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
        let operator = document.getElementById("operator").value;
        let result = document.getElementById("result");

        let output;
        switch (operator) {
            case "Add":
                output = num1 + num2;
                break;
            case "Subtract":
                output = num1 - num2;
                break;
            case "Multiply":
                output = num1 * num2;
                break;
            case "Divide":
                if (num2 === 0) {
                    result.innerHTML = "Cannot divide by zero!";
                    return;
                }
                output = num1 / num2;
                break;
            default:
                result.innerHTML = "Please select an operation.";
                return;
        }

        result.innerHTML = "Result: " + output;
    });
});
