import { useState } from 'react'
import reactLogo from './assets/react.svg'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

    const [from, setFrom] = useState("USD") // we store the data of from
    const [to, setTo] = useState("INR") //we store the data of to
    const [amount, setAmount] = useState(0) ////the amount that we give or enter as input
    const [convertedAmount, setConvertedAmount] = useState(0) //this is conveerted data

    const currencyInfo = useCurrencyInfo(from) //this is how we take the data from custom hook, we pass the from currency to the custom hook

    const options = currencyInfo ? Object.keys(currencyInfo) : [] // here keys are like usd, inr, eur etc means left part of the object

    const swap = () => { 
        //this function is used to swap the from and to currency, and also swap the amount and converted amount, so that we can convert in both direction without changing the input
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        setConvertedAmount( //this is how we convert the amount, we multiply the amount with the conversion rate that we get from the currencyInfo object, we access the conversion rate by using the to currency as key in the currencyInfo object
            amount * currencyInfo[to]

            // we have currencyINFO object which is like this{
            //     "usd": 1,
            //     "inr": 82.75,
            //     "eur": 0.92,
            //     ...
            //so as we enter currencrInfo[to] and to is inr then it will return 82.75 and we multiply it with the amount that we enter as input and we get the converted amount in inr, and if we change the to currency to eur then it will return 0.92 and we multiply it with the amount that we enter as input and we get the converted amount in eur
            // }
        )
    }

    return (
        <div

        //this is only css part 
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">

                

                        <div className="w-full mb-1">
                            {/* //it is input box componeent that we creater in inputbox   */}
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>

                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>

                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>

                    <button
    type="button"
    onClick={convert}
    className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
>
    Convert {from} to {to}
</button>

                   
                </div>
            </div>
        </div>
    )
}

export default App