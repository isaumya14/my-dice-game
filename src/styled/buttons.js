import styled from "styled-components";
export const Button=styled.button`
    color:white;
    padding:10px 18px;
    background:black;
    border-radius:5px;
    min-width:220px;
    border:none;
    font-size:16px;
    cursor:pointer;
    transition:0.3s background ease-in;

    &:hover{
    background-color:white;
    color:black;
    border: 1px solid black;
    transition:0.18s background ease-in;
    
    }
    `;