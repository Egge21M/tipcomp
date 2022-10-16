import { useRef, useState } from "react";
import "./App.css";

function App() {
    const amountRef = useRef();
    const [invoice, setInvoice] = useState();

    const fetchInvoice = async (amount) => {
        const url = "YOUR LNBITS PAYMENT URL HERE";
        const data = { out: false, amount: amount, memo: "Test Invoice" };
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Api-Key": "YOUR API KEY HERE",
            },
            body: JSON.stringify(data),
        });
        return res.json();
    };

    return (
        <div className="App">
            <h1>hello world</h1>
            <input ref={amountRef} type="number" />
            <button
                onClick={() => {
                    fetchInvoice(amountRef.current.value).then((data) => {
                        setInvoice(data.payment_request);
                    });
                }}
            >
                Fetch Invoice
            </button>
            {invoice && <p>{invoice}</p>}
        </div>

        
    );
}

export default App;
