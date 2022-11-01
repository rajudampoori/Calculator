
import React from "react";
import { useState } from "react";
import '../components/card.css'
const Card = () => {
    const [myvalue, setMyValue] = useState("")
    const handleClick = (e) => {
        e.preventDefault();
        setMyValue(e.target.value)
    }
    const handleClear = (e) => {
        e.preventDefault();
        setMyValue("")
    }
    const handleCalc = (e) => {
        e.preventDefault();

    }
    return (
        <div className="card-container">
            <div className="card-input">
                <div className="inputs">
                    <input type="text" value={myvalue} onChange={(e) => { setMyValue(e.target.value) }} />
                </div>
                <div className="cbtn">
                    <button onClick={(e) => { handleClear(e) }} value="c">c</button>
                </div>
            </div>
            <div className="same">
                <div><button onClick={(e) => { handleClick(e) }} value="1">1</button></div>
                <div><button onClick={(e) => { handleClick(e) }} value="2">2</button></div>
                <div><button onClick={(e) => { handleClick(e) }} value="3">3</button></div>
                <div><button onClick={(e) => { handleClick(e) }} value="/">/</button></div>
            </div>
            <div className="same">
                <div><button onClick={(e) => { handleClick(e) }} value="4">4</button></div>
                <div><button onClick={(e) => { handleClick(e) }} value="5">5</button></div>
                <div><button onClick={(e) => { handleClick(e) }} value="6">6</button></div>
                <div><button onClick={(e) => { handleClick(e) }} value="-">-</button></div>

            </div>
            <div className="same">
                <div><button onClick={(e) => { handleClick(e) }} value="7">7</button></div>
                <div><button onClick={(e) => { handleClick(e) }} value="8">8</button></div>
                <div><button onClick={(e) => { handleClick(e) }} value="9">9</button></div>
                <div><button onClick={(e) => { handleClick(e) }} value="+">+</button></div>
            </div>
            <div className="same">
                <div><button onClick={(e) => { handleClick(e) }} value=".">.</button></div>
                <div><button onClick={(e) => { handleClick(e) }} value="0">0</button></div>
                <div><button onClick={(e) => { handleCalc(e) }} value="=">=</button></div>
                <div><button onClick={(e) => { handleClick(e) }} value="*">*</button></div>
            </div>
        </div>
    )

}
export default Card;