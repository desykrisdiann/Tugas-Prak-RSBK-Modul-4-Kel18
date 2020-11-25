import React, { useState, useEffect, useRef} from 'react'

export default function Ref(){
    const [nama, setNama] = useState('')
    const renderCount = useRef(1)

    // const handleReset = () => {
    //     setrenderCount(1);
    // }
    useEffect(()=> {
        renderCount.current = renderCount.current + 1
    })
    return (
        <div className="Ref">
            <input value={nama} onChange={e=>setNama(e.target.value)}/> 
            <br/>
            <div>Nama ku adalah {nama}</div>
            <br/>
            <div>Sistem ini telah dirender sebanyak {renderCount.current} kali</div>
            <br/>
        {/* <div className="btnreset">
         <button onClick={handleReset}>Reset</button>
         </div> */}
         </div>

    )

    
    }
