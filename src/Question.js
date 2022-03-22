import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import data from './data';

const Question = (questions) => {
   const { id, title, info } = questions  
   const [showInfo, setShowInfo] = useState(false) 
   
   const handleClick =()=>{
     setShowInfo(!showInfo)
   }
   return (
    <article className='question'>
        <header style={{display:'flex'}}>
          <h3>{title} </h3>
          <button className='btn' onClick={handleClick}>
              {showInfo ? <AiOutlineMinus/>: <AiOutlinePlus/>}
          </button>
        </header>
        {showInfo &&  <p>{info}</p>}
    </article>
    
  );
};

export default Question;