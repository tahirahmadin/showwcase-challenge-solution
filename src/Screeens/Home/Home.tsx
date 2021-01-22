import React,{useState} from 'react'
import './Home.css'
export default function Home() {
    const [searchWord,setSearchWord]=useState('');

    const handleSearch=(event:any)=>{
        setSearchWord(event.target.value);
    }

    return (
        <div className='home-container'>
            <h4 className='home-heading mb-3'>Hi there! Welcome to your education showcase.</h4>
           <div >
               <h5 >
                   Type your name and click "Enter below to begin!"
               </h5>
               <div className='mt-3'><input className='inputfield' type='text' name='word' onChange={handleSearch} placeholder='Your name'/></div>
               <div className='mt-3'><button className='enter-button'>Enter</button></div>
               </div> 
            <div></div>
        </div>
    )
}
