import React, { useState } from 'react'
import styled from 'styled-components'


const Box=styled.div`
height:72px;
width:72px;
display:grid;
border:1px solid black;
place-items:center;
font-weight:700;

background-color: ${(props)=> props.isSelected?"black":"white"};
color:${(props)=> props.isSelected?"white":"black"};
`;

const NumberSelectorContainer=styled.div`

display:flex;
flex-direction:column;
align-items:end;

.container {
display:flex;
gap:24px;
}

p{
font-size:24px;
font-weight:800px;
display:flex;

}
.error{
color:red;
margin-bottom:10px;
font-size:30px;

}

`
const NumberSelector = ({error , setError,selectedNum,setselectedNum}) => {
    const arrNum=[1,2,3,4,5,6];

    const numberSelectHandler=(value)=>{
       setselectedNum(value);
       setError("");
       
    }
    
  return (
    <NumberSelectorContainer>
        <p className='error'>{error}</p>
        <div className='container'>
          
        {   
            arrNum.map((value,i)=>(
                <Box key={i} onClick={()=> numberSelectHandler(value)}
                isSelected={value===selectedNum}
                
                >{value}</Box>
            ))
        }
        </div>
        <p>Select a Number </p>
        
    </NumberSelectorContainer>
   
    
  )
}

export default NumberSelector