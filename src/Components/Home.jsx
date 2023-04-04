import React, { useRef, useState } from 'react'
import './Home.css'

import logo from '../Assets/LOGO.png'
import img1 from '../Assets/image 3.png'
import img2 from '../Assets/Group 83.png'
import img3 from '../Assets/Rectangle 24.png'
import img4 from '../Assets/image 4.png'
const Home = () => {
    const [otp,setOtp] = useState(["","","",""])
    const inputOtp = useRef([])

    const InputChange = (i, e) => {
        const value = e.target.value;
        const newOtp = [...otp];
        newOtp[i] = value;
        setOtp(newOtp);
        if (i < otp.length - 1 && value) {
            inputOtp.current[i + 1].focus();
        }
      };
    
      const handleInput = (e) => {
        e.preventDefault();
        const pasteOtp = e.clipboardData.getData('text/plain').slice(0, 4);
        const newOtp = [...otp];
        for (let i = 0; i < pasteOtp.length; i++) {
          newOtp[i] = pasteOtp[i];
          if (i < otp.length - 1) {
            inputOtp.current[i + 1].focus();
          }
        }
        setOtp(newOtp);
      };
    
      const submitData=(e)=>{
        e.preventDefault();
        console.log( otp.join(''));
      }
    
      const removeData=(e)=>{
        e.preventDefault();
        setOtp(['', '', '', ''])
      }
  return (
    <div className='Home'>
        <div className='Left'>
            <img src={logo} alt='logo' className='logo'/>
            <p className='text'>Verification</p>
            <div className='labels'>
                <p>SMS OTP</p>
                <p className='num'>Sent on: 77777-77777</p>
            </div>
         
            <form onSubmit={submitData} >
            <div className='inpt'>
              {otp.map((value, inx) => (
                <input
                  key={inx}
                  type="number"
                  min="0"
                  max="9"
                  value={value}
                  onChange={(event) => InputChange(inx, event)}
                  onPaste={handleInput}
                  ref={(e) => (inputOtp.current[inx] = e)}
                  className='otp'
                />
              ))}
            </div>

            <p className='enter-details'><span>Entered Wrong Details?</span><span className='enter-text' onClick={removeData}>Re-enter</span></p>

            <input type='submit' value="Verify" className='btn' />
          </form>
            <p className='line'>GO BACK TO HOME</p>
        </div>
        
        <div className='Right'>
        <img src={img1} alt="img1" className='img1'/>
        <img src={img2} alt="img2" className='img2'/>
        <img src={img3} alt="img2" className='img3'/>
        <img src={img4} alt="img2" className='img4'/>
        </div>
    </div>
  )
}

export default Home