import React, { useState } from 'react'
import QRScanner from 'react-qr-reader'
import './App.css';

function Scanner() {
    const[captcha,setCaptcha] = useState('Wait untill the data captures')
    const handleScan =(data)=> {
        // console.log("QR")
        // setCaptcha(data.text)
    }

    const handleError = (err) => {
    console.log(err)
    }
    return (
        <div className="App">
            <QRScanner 
                delay={300} 
                onError={handleError}
                onScan={handleScan}
                facingMode={'unknown'}
                style={{ width: '60%', height: '60%', textDecoration: 'none'}}
            />
            <p>{captcha}</p>
        </div>
    )
}

export default Scanner
