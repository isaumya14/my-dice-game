import React from "react";
import styled from "styled-components";

const RulesContainer = styled.div`
background-color:#fbf1f1;
max-width: 850px;
margin:0 auto;
margin-top:40px;
border-radius:10px;
padding:10px;

p{
font-size:16px;
}

h2{
font-weight:800px;
margin-bottom:10px;}


`;


const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <p>1. Select any number.</p>
      <p>2. Click on dice image.</p>
      <p>
        3. After clickING on dice if selected number is equal to dice number you will
        get same point as dice but if you get wrong guess then 2 point will be
        dedcuted from your score.{" "}
      </p>
      
    </RulesContainer>
  );
};

export default Rules;
