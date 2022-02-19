import {useState} from "react";

const Input = () => {
    const [mail, setName] = useState();
    const handleChange = (event) => {
        setName(event.target.value)
    }
    return (
        <div>
            <h1>{mail}</h1>
            <label htmlFor="email">Votre email</label>
            <input onChange={handleChange} type="email" name="email" id="email"/>
        </div>
);
}

export default Input;