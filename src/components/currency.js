import { useEffect, useState } from "react";
const url = "https://api.exchangerate.host/latest";
function CurrencyConvert() {
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();
    const [exchangeRate, setexchangeRate] = useState();
    const [showCurrency, setShowCurrency] = useState()
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                const firstCurrency = Object.keys(data.rates)[0];
                setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
                setFromCurrency(data.base);
                setToCurrency(firstCurrency);
                setexchangeRate(data.rates[firstCurrency])
            });
    }, []);
    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`${url}?base${fromCurrency}&symbols=${toCurrency}`)
                .then(res => res.json()).then((data) => {
                    console.log(data)
                    setexchangeRate(data.rates[toCurrency]);
                })
        }
    }, [fromCurrency, toCurrency])
    let toAmount, fromAmount
    const currencyConversion = (() => {
        fromAmount = amount;
        toAmount = amount * exchangeRate
        setShowCurrency(toAmount)
    })
    return (
        <div className="container">
            <div>
                <h4 style={{ paddingTop: "25px" }}>Currency converter</h4>
                <div className="showCurrency">
                    <h3>{showCurrency}</h3>
                </div>
                <input type="number" placeholder="Enter amount" className="textInput" onChange={(event) => setAmount(event.target.value)} />{" "}
                <br></br>
                <select className="selectCurrency" onChange={(event) => setFromCurrency(event.target.value)}>
                    {currencyOptions.map((option) => (
                        <option>{option}</option>
                    ))}
                </select>
                <select className="selectCurrency" id="selectedfromcurrency" onChange={(event) => setToCurrency(event.target.value)}>
                    {currencyOptions.map((option) => (
                        <option>{option}</option>
                    ))}
                </select>{" "}
                <br></br><br></br>
                <button onClick={currencyConversion} className="addBtn">Converter</button>
            </div>
        </div>
    )
}
export default CurrencyConvert


















