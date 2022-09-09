import React from 'react'
import transparency from '../img/transparency 1.svg';
import efficiency from '../img/time-management 1.svg';
import fairness from '../img/fair-trade 1.svg';
import team from '../img/best-employee 1.svg';
import styled,{ keyframes } from'styled-components';
const Choose = () => {
    return (
        <Chooseconatiner> 
            <Chooseh1>WHY CHOOSE US?</Chooseh1>
            <Cardwrapper>
            <Servicecard >
                <div>
                            <Seviceicon src={transparency}></Seviceicon>
                            </div>
                            <ServiceH2>Transparency</ServiceH2>
                            <Servicep>We believe in 100% transparency while working on any project without any defect</Servicep>
             </Servicecard>
             <Servicecard >
                 <div>
                            <Seviceicon src={efficiency}></Seviceicon>
                            </div>
                            <ServiceH2>Efficiency</ServiceH2>
                            <Servicep>We have been working with efficiency on project to deliver what our clients need.</Servicep>
                        </Servicecard>
                        <Servicecard >
                        <div>
                            <Seviceicon src={fairness}></Seviceicon>
                            </div>
                            <ServiceH2>Fairness</ServiceH2>
                            <Servicep>Every cliebnt and Project is equally important for us and we give our best, wether it is big or small project.</Servicep>
                        </Servicecard>
                        <Servicecard >
                            <div>
                            <Seviceicon src={team}></Seviceicon>
                            </div>
                            <ServiceH2>Experienced Team </ServiceH2>
                            <Servicep>Make your vision and ideas reality with our experienced team. We uncover the best solutions for the growth of your business through our proven experience in digital.</Servicep>
                        </Servicecard>
            </Cardwrapper>
        </Chooseconatiner>
    )
}
const Chooseconatiner=styled.div`
width:100vw;
margin-top:5rem;
min-height:80vh;
text-align:center;
`;
const Chooseh1=styled.h1`
font-size:2.5rem;
`;
const Cardwrapper=styled.div`
display:flex;
/* grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); */
justify-content:space-around;
margin-top:2rem;
align-items:center;
flex-wrap:wrap;
margin-bottom:10rem;
`;
const Servicecard=styled.div`
background:#fff;
display:flex;
flex-basis: 300px;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:10px;
width:400px;
height:480px;
padding:30px;
margin:2rem 20px;
box-shadow:0px 20px 20px rgba(0,0,0,0.2),0px 20px 30px rgba(0,0,0,0.2)  ;
transition:all 0.5s ease-in-out;
div{
    width:180px;
    height:180px;
    border-radius:50%;
    background:#f86011;
    padding:1rem;
}
@media Screen and (max-width:1370px){
    margin-bottom:30px;
    width:250px;
    
}
@media Screen and (max-width:579px){
    margin:0px 0px;
    margin-bottom:30px;
    width:100%;
}
&:hover{
    transform:scale(1.02);
    transition:all 0.5s ease-in-out;
    cursor: pointer;
}
`;
const ServiceH2=styled.h2`
font-size:1.5rem;
margin-bottom:15px;
margin-top:20px;
margin-bottom:20px;
&:hover{
    color:#fff;
}
`
const Servicep=styled.p`
font-size:1.2rem;
padding:0;  
`;

const Seviceicon=styled.img`
width:100%;
height:100%;
margin-bottom:10px;
@media Screen and (max-width:300px){
    width:100px;
}
`
export default Choose;
