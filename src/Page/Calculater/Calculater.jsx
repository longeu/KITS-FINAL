import { useState } from "react";
import "./Calculater.css"
import { Button } from "antd";
import { CalculatorIcon } from "../../assets/calculatorIcon";


export const Calculater = () => {
    const [input, setInput] = useState("0");
    const [previousNumber, setPreviousNumber] = useState("");
    // const [historyNumber, setHistoryNumber] = useState("0");
    const [operator, setOperator] = useState("");
    const [evaluated, setEvaluated] = useState(false);

    const addToInput = (val) => {
        if (evaluated) {
            setEvaluated(false)
        }
        setInput((prevValue) => {
            if (prevValue == '0' || evaluated || (operator != "" && isNaN(prevValue))) {
                // console.log(evaluated)
                return val;
            } else {
                return prevValue + val;
            }
        });

    };

    const add = (val) => {
        if (!operator) {
            setPreviousNumber(input);
        }
        setOperator(val);
        setInput(val);
    };


    const evaluate = () => {
        if (isNaN(input)) {
            return
        }
        let total = calculated();
        setEvaluated(true);
        setInput(total);
        setPreviousNumber(total)
        setOperator("")
    };

    const calculated = () => {
        let total = 0
        if (operator === "+") {
            total = parseInt(previousNumber) + parseInt(input);
        } else if (operator === "-") {
            total = parseInt(previousNumber) - parseInt(input);
        } else if (operator === "x") {
            total = parseInt(previousNumber) * parseInt(input);
        } else if (operator === "/" && input != "0") {
            total = parseInt(previousNumber) / parseInt(input);
        } else {
            total = input
        }
        return total;
    }

    const handleClearClick = () => {
        setInput('0');
        setOperator("");
        setPreviousNumber("");
    };

    return (
        <div>
            <div className="content-header">
                <CalculatorIcon />
                <h1 className="header-title">Calculator</h1>
            </div>
            <div className="content-body">
                <div className="calculator">
                    <div className="display">
                        {input}
                    </div>
                    <div className="buttons">
                        <div className="row">
                            <Button className="button" onClick={() => addToInput("7")}>7</Button>
                            <Button className="button" onClick={() => addToInput("8")}>8</Button>
                            <Button className="button" onClick={() => addToInput("9")}>9</Button>
                            <Button className="button" onClick={() => add("+")}>+</Button>
                        </div>
                        <div className="row">
                            <Button className="button" onClick={() => addToInput("4")}>4</Button>
                            <Button className="button" onClick={() => addToInput("5")}>5</Button>
                            <Button className="button" onClick={() => addToInput("6")}>6</Button>
                            <Button className="button" onClick={() => add("-")}>-</Button>
                        </div>
                        <div className="row">
                            <Button className="button" onClick={() => addToInput("1")}>1</Button>
                            <Button className="button" onClick={() => addToInput("2")}>2</Button>
                            <Button className="button" onClick={() => addToInput("3")}>3</Button>
                            <Button className="button" onClick={() => add("x")}>x</Button>
                        </div>
                        <div className="row">
                            <Button className="button" onClick={() => handleClearClick()}>AC</Button>
                            <Button className="button" onClick={() => addToInput(0)}>0</Button>
                            <Button className="button" onClick={() => evaluate()}>=</Button>
                            <Button className="button" onClick={() => add("/")}>/</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}