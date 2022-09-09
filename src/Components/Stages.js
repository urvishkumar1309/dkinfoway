import React from 'react'
import styled,{ keyframes } from'styled-components';
import image1 from '../img/Our Stages 1.svg';
const Stages = () => {
    return (
        <Stagecontainer>
            <Stageh1>Our Development Process</Stageh1>   
            <Imgcontainer>
            <Img src={image1}></Img>
            </Imgcontainer>         
        </Stagecontainer>
    )
}
const Stagecontainer=styled.div`
width:100vw;
height:clamp(40vh,80vh,90vh);   
text-align:center;
background:rgba(0,0,0,0);
`
const Stageh1=styled.h1`
font-size:3rem;
margin-top:3rem;

`
const Imgcontainer=styled.div`
width:75%;
margin:0 auto;
height:clamp(30vh,60vh,90vh);;
margin-top:5rem;

`
const Img =styled.img`
width:100%;
height:100% ;
`
export default Stages;
