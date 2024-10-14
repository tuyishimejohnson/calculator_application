import { useState } from "react";

const Calculator = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reverse();

  const [initialVal, setInitialVal] = useState("0");
  const [operators, setOperators] = useState("");
  const [firstOperand, setFirstOperand] = useState("");

  const handlePositiveNegative = () => {
    setInitialVal((prevNum) => (+prevNum * -1).toString());
  };

  const handleClick = (number) => {
    if (initialVal === "0") {
      setInitialVal(number);
    } else {
      setInitialVal((prevVal) => prevVal + number.toString());
    }
  };

  const handleOperatorClick = (operator) => {
    setOperators(operator);
    setFirstOperand(initialVal);
    setInitialVal("0");
  };

  const deleteInputs = () => {
    setFirstOperand("");
    setOperators("");
    setInitialVal("0");
  };

  const handleResults = () => {
    switch (operators) {
      case "+":
        setInitialVal((prevVal) => +firstOperand + +prevVal);
        break;
      case "-":
        setInitialVal((prevVal) => +firstOperand - +prevVal);
        break;
      case "*":
        setInitialVal((prevVal) => +firstOperand * +prevVal);
        break;
      case "/":
        setInitialVal((prevVal) => +firstOperand / +prevVal);
        break;
      case "%":
        setInitialVal((prevVal) => +firstOperand % +prevVal);
        break;

      case ".":
        setInitialVal((prevVal) => firstOperand + "." + prevVal);
        break;
    }
  };

return (
    <div className="h-screen flex items-center justify-center">
        <div className="w-1/3">
            <h1 className="text-center bg-gray-500 py-3 text-3xl text-white font-bold">
                Calculator Application
            </h1>

            <div className="flex">
                <span className="py-5 text-4xl block">{initialVal}</span>
            </div>

            <div>
                <div className="grid grid-cols-4 gap-1">
                    <span
                        className="border flex justify-center py-5 border-black"
                        onClick={deleteInputs}
                    >
                        AC
                    </span>
                    <span
                        className="border flex justify-center py-5 border-black"
                        onClick={handlePositiveNegative}
                    >
                        +/-
                    </span>
                    <span
                        className="border flex justify-center py-5 border-black"
                        onClick={() => handleOperatorClick("%")}
                    >
                        %
                    </span>
                    <div className="grid row-span-4 gap-1">
                        <span
                            className="bg-yellow-600 border flex justify-center py-5 border-black row-span-2"
                            onClick={() => handleOperatorClick("/")}
                        >
                            /
                        </span>
                        <span
                            className="bg-yellow-600 border flex justify-center py-5 border-black"
                            onClick={() => handleOperatorClick("*")}
                        >
                            *
                        </span>
                        <span
                            className="bg-yellow-600 border flex justify-center py-5 border-black"
                            onClick={() => handleOperatorClick("+")}
                        >
                            +
                        </span>
                        <span
                            className="bg-yellow-600 border flex justify-center py-5 border-black row-span-2"
                            onClick={() => handleOperatorClick("-")}
                        >
                            -
                        </span>
                    </div>
                    {numbers.map((num, index) => (
                        <span
                            key={index}
                            className={`border flex justify-center py-4 border-black ${
                                num == 0 ? "col-span-2" : num
                            }`}
                            onClick={() => handleClick(num)}
                        >
                            {num}
                        </span>
                    ))}

                    <span
                        className="border flex justify-center py-5 border-black"
                        onClick={() => handleOperatorClick(".")}
                    >
                        .
                    </span>
                    <span
                        className="flex justify-center py-5 border-black bg-yellow-600 border"
                        onClick={handleResults}
                    >
                        =
                    </span>
                </div>
            </div>
        </div>
    </div>
);
};

export default Calculator;
