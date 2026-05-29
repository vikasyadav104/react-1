import React from 'react'
//component is reusable UI block, we can use it multiple times in our application, it accepts props as input and returns a React element as output

function InputBox({

    //these all are props destucturing
    //props are data passed from parent component to child component, we can use it to pass data from one component to another component, in this case we are passing the data from App component to InputBox component
    label, //this is label which is used to display from or to in our application
    amount, //this is numerical value which is used to display the amount in our application
    onAmountChange, //this is function which is used to change the amount in our application, we can use it to change the amount in our application
    onCurrencyChange, //this is function which is used to change the currency in our application, we can use it to change the currency in our application
    currencyOptions=[], //currencyOPTIONS that isn displayed in dropdown 
    selectCurrency="usd",
    amountDisable=false,
     currencyDisable=false,

    
    className = "",
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    
                >
                    
                       {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>


                       ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
