// Hooks are very simple to create ** For E.g. **

import { useState } from "react"

function Hello() {
    return[] //just pass any two variables in the array and *whoops* the hook is Created !
}
// ****** Now We are making the actual hook which we're going to be using for our ReactApp
// we're also using other hooks to create our "hook".

// Custom Hooks can also use built-in hooks, e.g. {useEffect, useState, useCallback and etc}

function useCurrencyInfo (currency) {
    const [data, setData] = useState({}) //putting an empty object made me use a Contingency agianst any error.
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    },[currency]) //dependencies
console.log(data);
return data
}

export default useCurrencyInfo;

// custom Hooks created !