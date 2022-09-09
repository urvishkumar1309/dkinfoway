import styled,{ keyframes } from'styled-components';
import {useState} from 'react';
import {motion,useViewportScroll} from 'framer-motion';
import image1 from '../img/smartphone.svg';
import image2 from '../img/web-development.svg';
import image4 from '../img/seo.svg';
import image3 from '../img/analytics.svg';
import image5 from '../img/visualization.svg';
import image6 from '../img/bullhorn.svg';
import react,{useEffect} from 'react';
const Servicesection=()=>{
    const [bounce,changebounce]=useState(false);
    const {scrollYProgress}=useViewportScroll();
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            console.log(scrollYProgress)
        })
    },);
    return(
        <Servicecontainer  id="services">
            <MainContainer>
               
                <ServiceH1  >Our Sevices</ServiceH1>
                <BRdiv></BRdiv>
                <Serp >DK infoway is committed to providing creative and scalable solutions for every customer. 
                    We know that each customer is different, which is why all of our services can be easily customized. 
                    Learn more about what we offer below and give us a call if you have any questions, 
                    or if you’d like to meet with one of our team members.</Serp>
                    <Servicewrapper >
                    <Carddiv>
                        <Servicecard >
                            <Seviceicon src={image2}></Seviceicon>
                            <ServiceH2>Webs App Development</ServiceH2>
                            <Servicep>We create your web apps more understandable that gives a best impact on your business and success on a volatile marketplace.</Servicep>
                        </Servicecard>
                        </Carddiv>
                        <Carddiv>
                        <Servicecard >
                            <Seviceicon src={image4}></Seviceicon>
                            <ServiceH2>Mobile App Development</ServiceH2>
                            <Servicep>Our developers served extreme level of quality android and ios application. we build fast and easy to use application. our team served multiple language coding and programing..</Servicep>
                        </Servicecard>
                        </Carddiv>
                        <Carddiv>
                        <Servicecard >
                            <Seviceicon src={image3}></Seviceicon>
                            <ServiceH2>Analytics</ServiceH2>
                            <Servicep>We analyse closely to purpose and vision of the customers. we are make sure how developments, design work or looks before the delivered to customers.</Servicep>
                        </Servicecard>
                        </Carddiv>
                        <Carddiv>
                        <Servicecard>
                            <Seviceicon src={image4}></Seviceicon>
                            <ServiceH2>Search Engine Optimization</ServiceH2>
                            <Servicep>We will help you to achieve the highest possible rankings every month 
because we know the importance of top rankings.</Servicep>
                        </Servicecard> 
                        </Carddiv>
                        <Carddiv>
                        <Servicecard>
                            <Seviceicon src={image5}></Seviceicon>
                            <ServiceH2>Data Visulization</ServiceH2>
                            <Servicep>Our Data visualization makes it easier to detect patterns and trends of the customers. With the help of our data visualization service, our customers can quickly understand complex patterns in data sets.</Servicep>
                        </Servicecard> 
                        </Carddiv>
                        <Carddiv>
                        <Servicecard>
                            <Seviceicon src={image6}></Seviceicon>
                            <ServiceH2>Digital Marketing</ServiceH2>
                            <Servicep>We will develop and build strategy that's best for your brand. And We manage your complete social media channel that will increase your social media asset or presence.</Servicep>
                        </Servicecard> 
                        </Carddiv>

                    </Servicewrapper>
                    </MainContainer>
        </Servicecontainer>
    )
}
const BRdiv=styled.div`
width:40%;
height:2px;
box-shadow:0px 5px 10px rgba(0,0,0,0.2);
background:gray;
margin-bottom:2rem;
`
const Servicecontainer=styled(motion.div)`
min-height:100vh;
width:100vw;

`;
const MainContainer=styled(motion.div)`
display:flex;

width:80%;
margin:0 auto;
height:100%;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
`

;
const ServiceH1=styled(motion.h1)`
margin-top:15px;
font-size:clamp(1.5rem,7vw,3rem);
color:#f86011;
margin-bottom:10px;
animation:title 0.5s ease-in-out;
    @keyframes title {
        0%{
            opacity:0;
        }
        100%{
            opacity:1;
        }
    }
}
@media Screen and (max-width:579px){
  

`;
const Serp=styled(motion.p)`
    max-width:1000px;
    font-size:1.4rem;
    margin-bottom:64px;
`
const Servicewrapper=styled(motion.div)`
display:flex;
/* grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); */
justify-content:space-around;
align-items:center;
flex-wrap:wrap;
margin-bottom:10rem;
`;
const Servicecard=styled(motion.div)`
background:#fff;
display:flex;
transform:translateY(-10%);
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:10px;
width:330px;
height:480px;
padding:30px;
margin:0px 20px;
box-shadow:0px 20px 20px rgba(0,0,0,0.2),0px 20px 30px rgba(0,0,0,0.2)  ;
transition:all 0.5s ease-in-out;
/* @media Screen and (max-width:1370px){
    margin-bottom:30px;
    width:250px;
    
}
@media Screen and (max-width:579px){
    margin:0px 0px;
    margin-bottom:30px;
    width:100%;
} */
&:hover{
    transform:scale(1.02);
    transition:all 0.5s ease-in-out;
    cursor: pointer;
    background:#f86011;
    color:#fff;
}
`;
const Seviceicon=styled(motion.img)`
width:160px;
height:160px;
margin-bottom:10px;
@media Screen and (max-width:300px){
    width:100px;
}
`
const ServiceH2=styled(motion.h2)`
font-size:1.5rem;
margin-bottom:15px;
margin-top:10px;
&:hover{
    color:#fff;
}
`
const Servicep=styled(motion.p)`
font-size:1.2rem;
padding:0;  
`;

const Carddiv=styled(motion.div)`
position:relative;
height:100% ;
margin:1rem;
box-shadow:0px 10px 30px rgba(0,0,0,0.2);
transition:all 0.5s ease-in-out;
border-radius:1rem;
margin-top:5rem;
&:hover{
    transform:scale(1.02);
    transition:all 0.5s ease-in-out;
    cursor: pointer;
}
`;
export default Servicesection;