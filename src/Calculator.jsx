import React, { useState } from 'react'

const Calculator = () => {

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reverse()

    const [initialVal, setInitialVal] = useState("0") 
    const [operators, setOperators]  = useState("")
    const [firstOperand, setFirstOperand] = useState("")
    
    const handlePositiveNegative = () => {
        setInitialVal(prevNum => (+prevNum * (-1)).toString())
    }
    
    

    const handleClick = (number) => {    
        if(initialVal === "0") {
            setInitialVal(number)
        } else {
            setInitialVal(prevVal => prevVal + number.toString())
        }
        
    }


    const handleOperatorClick = (operator) => {
        setOperators(operator)
        setFirstOperand(initialVal)
        setInitialVal("0")
    }


    const deleteInputs = () => {
        setFirstOperand("")
        setOperators("")
        setInitialVal("0")
    }




    const handleResults = () => {
        switch (operators) {
            case "+":
                setInitialVal(prevVal => +firstOperand + (+prevVal))
                break
            case "-":
                setInitialVal(prevVal => +firstOperand - (+prevVal))
                break
            case "*":
                setInitialVal(prevVal => +firstOperand * (+prevVal))
                break
            case "/":
                setInitialVal(prevVal => +firstOperand / (+prevVal))
                break
            case "%":
                setInitialVal(prevVal => +firstOperand % (+prevVal))
                break
        }
    }
    
    return (

        <div className='w-2/5 m-auto'>
            <h1 className='text-center  bg-blue-500 py-3'>Calculator Application</h1>
        
                <div className=' flex'>
                    <span className='py-5 text-4xl block'>{initialVal}</span>
                </div>

            <div>
                <div className='grid grid-cols-4'>
                    <span className='bg-blue-300 border flex justify-center py-9 border-black' onClick={deleteInputs}>AC</span>
                    <span className='bg-blue-300 border flex justify-center py-9 border-black' onClick={handlePositiveNegative}>+/-</span>
                    <span className='bg-blue-300 border flex justify-center py-9 border-black' onClick={() => handleOperatorClick("%")}>%</span>
                    <span className='bg-yellow-600 border flex justify-center py-9 border-black' onClick={() => handleOperatorClick("/")}>/</span>
                    {numbers.map((num, index) => (
                        
                    <span key={index} className='bg-blue-300 border flex justify-center py-9 border-black' onClick={() => handleClick(num)}>{num}</span>
                    ))}
                    
                    <span className='bg-yellow-600 border flex justify-center py-9 border-black' onClick={() => handleOperatorClick("*")}>*</span>
                    
                    <span className='bg-yellow-600 border flex justify-center py-9 border-black' onClick={() => handleOperatorClick("-")}>-</span>
                    <span className='bg-yellow-600 border flex justify-center py-9 border-black' onClick={() => handleOperatorClick("+")}>+</span> 
                    <span className='bg-blue-300 border flex justify-center py-9 border-black'>.</span>
                    <span className='bg-blue-300 border flex justify-center py-9 border-black' onClick={handleResults}>=</span>
                </div>
            </div>
        </div>
      )


    

  
}

export default Calculator