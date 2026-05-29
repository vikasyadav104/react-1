// that is how custom hooks are created, we can use useState and useEffect in it
// and return the data that we want to use in our component

import { useEffect, useState } from 'react' //useState and useEffect are hooks usestate is used to store the data and useEffect is used to fetch the data when the component mounts or when the currency changes
  

//now i made custom hook to fetch the currency info 
//usuallly hooks start with use and then the name of the hook, in this case useCurrencyInfo
function useCurrencyInfo(currency) {

    const [data, setData] = useState({})  //const [stateVariable, stateUpdater] = useState(initialValue)

// here setData is like a function that we can use to update the value of data variable for ex setData(newData)=> data will be updated to newData, and initial value of data is an empty object {}

    //here data is data={};

    useEffect(() => {

        if (!currency) return; //if there is no currency then return and do not fetch the data

        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`
        )
        .then((res) => res.json()) //this is link promise we are converting the response into json format cause fetch returns raw response and we need to conver it into readable format(json)
        .then((res) => {
            setData(res[currency.toLowerCase()]) //we are setting the data to the state variable that we created above, we are accessing the currency key from the response and setting it to the data state variable
        })

    }, [currency])

    return data
}

export default useCurrencyInfo