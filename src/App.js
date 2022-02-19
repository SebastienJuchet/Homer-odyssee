import './App.css';
import React, {useState} from "react";
import Form from "./components/SignUp";

function App() {
    const [value, setValue] = useState('')
    const handleSubmit = (event) => {
        setValue(event)
    }
    return (
        <div className="App">
            <h1>{value}</h1>
            <Form valueSubmit={handleSubmit}/>
        </div>
    );
}

export default App;
