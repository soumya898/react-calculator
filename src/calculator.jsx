import React, { useState } from "react";
import "./cal.css";

const Calculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const validateInput = (input) => {
        return /^[+-]?\d+(\.\d+)?$/.test(input);
    };

    const handleOperation = (operation) => {
        if (num1.trim() === "" || num2.trim() === "") {
            setErrorMsg("Both fields are required");
            setResult("");
            setSuccessMsg("");
            return;
        }

        if (!validateInput(num1) || !validateInput(num2)) {
            setErrorMsg("Please enter valid numbers");
            setResult("");
            setSuccessMsg("");
            return;
        }

        setErrorMsg("");

        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        let operationResult;

        switch (operation) {
            case "+":
                operationResult = number1 + number2;
                break;
            case "-":
                operationResult = number1 - number2;
                break;
            case "*":
                operationResult = number1 * number2;
                break;
            case "/":
                operationResult = number1 / number2;
                break;
            default:
                break;
        }

        setResult(operationResult);
        setSuccessMsg("Operation successful!");
    };

    return (
        <div className="calculator-container">
            <h1 className="calculator-heading">React Calculator</h1>
            <div className="input-container">
                <input
                    className="calculator-input"
                    placeholder="Enter Num1"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    type="text"
                />
            </div>
            <div className="input-container">
                <input
                    className="calculator-input"
                    placeholder="Enter Num2"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    type="text"
                />
            </div>
            <div className="button-box">
                <button onClick={() => handleOperation("+")} className="operation-btn">+</button>
                <button onClick={() => handleOperation("-")} className="operation-btn">-</button>
                <button onClick={() => handleOperation("*")} className="operation-btn">x</button>
                <button onClick={() => handleOperation("/")} className="operation-btn">/</button>
            </div>
            {successMsg && <p className="success-msg">{successMsg}</p>}
            {errorMsg && <p className="error-msg">{errorMsg}</p>}
            {result && <p className="result-msg">Result: {result}</p>}
        </div>
    );
};

export default Calculator;
