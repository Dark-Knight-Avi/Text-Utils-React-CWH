import React, { useState } from 'react'


export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpBtn = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerBtn = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        // let newText = text.replace(/\s+/g, ' ').trim();
        // setText(newText);
    }
    const handleCopy = () => {
        let myText = document.getElementById('exampleFormControlTextarea1');
        myText.select();
        navigator.clipboard.writeText(myText.value); 
    }
    const clearAll = () => {
        setText('');
    }
    const [text, setText] = useState('Enter text here...');
    return (
        <>
            <div className="container">
                <h1 className={`text-center my-4 text-${props.mode === 'dark' ? 'white' : 'dark'}`}>{props.heading}</h1>
                <div className="mb-2">
                    <textarea className={`form-control border-${props.mode === 'dark' ? 'white  bg-dark text-white' : 'primary'} border-2`} onChange={handleOnChange} id="exampleFormControlTextarea1" value={text} rows="10"></textarea>
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <button onClick={handleUpBtn} className="btn-primary">Change to UpperCase</button>
                    <button onClick={handleLowerBtn} className="btn-success">Change to LowerCase</button>
                    <button onClick={removeExtraSpace} className="btn-danger">Remove Extra Spaces</button>
                    <button onClick={handleCopy} className="btn-warning">Copy Text</button>
                    <button onClick={clearAll} className="btn-outline-danger">Clear</button>
                </div>
            </div>
            <div className={`container text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
                <h1 className='my-2'>Your Text Summary</h1>
                <div className="mx-4">
                    {/* <p>{ text.trim().length } characters</p> */}
                    <p>{text.length} Characters</p>
                    {/* <p>{ text.replace(/\n/g, " ").split(' ').filter(value => value != "").length } words</p> */}
                    <p>{ text === '' ? 0 : text.endsWith(' ') ? text.split(" ").length - 1 : text.split(" ").length } Words</p>
                    <p>Reading Time: {0.008 * (text === '' ? 0 : text.split(" ").length)} minute</p>
                    <h2>Preview:</h2>
                    <p>{ text }</p>
                </div>
            </div>
        </>
    )
}
