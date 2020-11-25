import React, { useState, useEffect, useRef, useMemo} from 'react'
import "./Index.css";
import logo from "../logo.svg";

export default function Ref(){
    const [nama, setNama] = useState('')
    const renderCount = useRef(1)
    const [showImage] = useState(true);

    // const handleReset = () => {
    //     setrenderCount(1);
    // }

    //useMemo
    const hideImage = useMemo (() => {
        return {
            display : showImage ? 'flex' : 'none'
        }
    }, [showImage])


    useEffect(()=> {
        renderCount.current = renderCount.current + 1
    })
    return (
        <div className="input">
            <br/>
              <input
                type="text"
                value={nama}
                className="form-input"
                onChange={e => setNama(e.target.value)}/>
            <br/>
            <div>Nama ku adalah {nama}</div>
            <br/>
            <div>Sistem ini telah dirender sebanyak {renderCount.current} kali</div>
            <br/>
        
            <div className="ViewImage">
                <div className="ViewImage1">
                    <img
                    className="App-logo"
                    style={{display: showImage === true ? "flex" : "none"}}
                    src={logo}
                    alt="logo"
                />
                </div>
                <button className="Button" onClick={hideImage}>
                    {showImage !== true ? "show" : "hide"}
                </button>
            </div>

        {/* <div className="btnreset">
         <button onClick={handleReset}>Reset</button>
         </div> */}
         </div>
         

    )

    
    }
