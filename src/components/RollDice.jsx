import React, { useState } from 'react'
import styled from 'styled-components';

const StoreDice=styled.div`
margin-top:48px;
display:flex;
flex-direction:column;
align-items:center;

p{
font-size:24px;


}

.dice {
cursor:pointer;}
`;


const RollDice = ({currentDice,rollingDice }) => {
    

  return (
    <>
     <StoreDice>
        <div className='dice' onClick={(rollingDice)}>
         <img src={`all_dices/dice_${currentDice}.png`} alt="" />
    </div>
    <p>Click on this dice to roll</p>
    </StoreDice>
    </>
    
   
  )
}

export default RollDice