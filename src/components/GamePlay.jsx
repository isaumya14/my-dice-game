import React,{useState} from 'react'
import styled from 'styled-components';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
import { Button } from '../styled/buttons';
import Rules from './Rules';


const MainContainer=styled.main`
.top-section{
display:flex;
justify-content:space-around;
align-items:end;
padding-top:70px;
}

.btns{
display:flex;
flex-direction:column;
align-items:center;
gap:20px;
margin-top:30px;

}
`;



const GamePlay = () => {
    const[score,setScore]=useState(0);
    const[selectedNum,setselectedNum]=useState();
    const[currentDice,setcurrentDice]=useState(1);
    const[error,setError]=useState();
    const[showRules,setshowRules]=useState(false);

  const generateRandomNum = (min,max) => {
      return Math.floor(Math.random()*(max-min)+min);

  };
  const rollingDice = ()=>{
      if(!selectedNum){
        setError("You have not selected any number.");
        return;
      }
      const randomNum= generateRandomNum(1,7);
      setcurrentDice((prev)=>randomNum);

      if(selectedNum===randomNum){
        setScore((prev)=> prev+ selectedNum);
      }
      else{
        setScore((prev)=>prev-2);
      }

      setselectedNum(undefined);
  };

  const resetScore=()=>{
    setScore(0);
  }

  
  return (
    <MainContainer>
        <div className='top-section'>
        <TotalScore score={score}/>
        <NumberSelector error={error} setError={setError}
         selectedNum={selectedNum}  setselectedNum={setselectedNum}/>
        </div>
        <RollDice currentDice={currentDice} rollingDice={rollingDice} />

        <div className='btns'>
        <Button onClick={resetScore}>Reset Score</Button>
        <Button onClick={()=> setshowRules((prev)=>!prev)}>Show Rules</Button>
        </div>

        {showRules&& <Rules />}

    </MainContainer>
  )
}

export default GamePlay