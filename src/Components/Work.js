import React from 'react'
import styled,{ keyframes } from'styled-components';
import image1 from '../img/pexels-fauxels-3182773.jpg';
import quotes from '../img/qout.svg'
import Servicesection from './Servicesection'
const Work = () => {
    return (
        <Stagecontainer image1={image1}>
            <Workcontainer></Workcontainer>
            <Img  src={quotes}></Img>
            <Stageh1>Our business is about create possibilities for customers to grow business with technology</Stageh1>  
             
           
        </Stagecontainer>
    )
}
const Workcontainer=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;

background:rgba(0,0,0,0.6);
`
const Stagecontainer=styled.div`
position:relative;
margin-top:10rem;
width:100vw;
min-height:50vh;
text-align:center;
background:url(${image1});
background-size: cover;
background-attachment: fixed;
`
const Stageh1=styled.h1`
font-size:clamp(1rem,5vw,2.2rem);
width:50%;
margin:auto;
margin-top:2rem;
padding:1rem;
color:#fff;
position:relative;
z-index:9;

`
const Imgcontainer=styled.div`
width:75%;
margin:0 auto;
height:90vh;
margin-top:5rem;
`
const Img =styled.img`
position:relative;
margin-top:4rem;
width:50px;
height:50px ;
z-index:999;
`
export default Work;
