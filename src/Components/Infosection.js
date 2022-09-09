import styled from 'styled-components';
import {motion} from 'framer-motion';
import imag from '../img/dw.svg'
import {titleAnim,fade,imageAnim} from './Animation'
const Infosection=()=>{ 
    
    return (
        <Infocontainer   id="about">
            <Infowrapper>
                <Inforow>
                    <Column1>
                    <TextWrapper>
                        <Titlediv >
                    
                        <Topline > ABOUT OUR </Topline>
                         <Topline2 >COMPANY</Topline2>
                
                        </Titlediv>
                        <Headline >Welcome to DK INFOWAY</Headline>
                        <Description>
                            <p>DK INFOWAY is your one-stop destination for top-notch Web Apps & Mobile Application Development solutions. We will facilitate our clients in optimizing their core business processes. We are bound to deliver best quality services to our customers. </p>
                        </Description>
                    </TextWrapper>
                    </Column1>
                    {/* <Column3></Column3> */}
                    <Column2>
                    <Imagcon>
                        <Img variants={imageAnim} initial="hidden" animate="show" src={imag}></Img>
                    </Imagcon>
                    </Column2>
                </Inforow>
            </Infowrapper>
        </Infocontainer>
    )
}
export default Infosection;
const Infocontainer=styled(motion.div)`
color: black;
background:#fff;
min-height:100vh;
z-index: 10;
position: relative;
@media Screen and (max-width: 768px) {
    padding:100px 0px;
}
`
const Infowrapper=styled(motion.div)`

display:flex;
justify-content:center;
align-items:center;
min-height:100vh;
z-index:1;
width:75%;
margin-right:auto;
margin-left:auto;
` 
const Inforow=styled(motion.div)`
display:grid;
/* display:flex;

justify-content:space-between;
align-items:center; */
width:100% ;
height:100% ;
align-self: center;
/* justify-items:center; */
/* flex-wrap:wrap; */
/* display:grid;
 align-items:center;*/
 align-items:center;
grid-template-columns:repeat(auto-fit,minmax(40px,1fr));
grid-template-rows:repeat(auto-fit,1fr);
grid-template-areas:"col1 col2"; 
grid-column-gap:50px;
@media Screen and (max-width: 900px) {
    grid-template-areas:"col1 col1"
                        "col2 col2";
    }
`;
const Column1=styled(motion.div)`
    /* margin-bottom:15px;
    padding:0 15px; */
    grid-area:col1;
`;
const Column2=styled(motion.div)`
    /* margin-bottom:15px;
    padding:0 15px; */
    grid-area:col2;

`;
const TextWrapper=styled(motion.div)`
    /* max-width:540px; */
    /* padding-top:0px;
    padding-bottom:60px; */
    overflow:hidden;
    width:100% ;
    height:100% ;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:left;
    align-self:center;
`;
const Topline=styled(motion.div)`
    /* max-width:540px; */
    font-size:48px;
    width:100% ;
    text-transform:uppercase;
    line-height:1.1;
    font-weight:700;
    letter-spacing:1.4px;
    color:#f86011;
    @media screen and (max-width:480px){
        font-size:32px;
    }
`
const Topline2=styled(motion.div)`
    /* max-width:540px; */
    font-size:48px;
    width:100% ;
    text-transform:uppercase;
    line-height:1.1;
    font-weight:700;
    letter-spacing:1.4px;
    color:#f86011;
    
    @media screen and (max-width:480px){
        font-size:32px;
    }
`
const Headline=styled(motion.div)`
    /* margin-bottom:10px; */
    font-size:30px;
    line-height:24px;
    width:100%;
    margin-bottom:1.5rem;
    /* max-width:440px; */
`;
const Description=styled(motion.div)`
    margin-bottom:24px;
    font-size:20px;
    letter-spacing:1px;
    line-height:30px;
    max-width:540px;
    align-self:flex-start;
`;
const Imagcon=styled(motion.div)`
width:100% ;
height:100% ; 
`
const Img=styled(motion.img)`
width:100% ;
height:100% ;

/* @media Screen and (max-width: 768px) {
    object-fit:cover;
} */
`;
/* margin:0 0 10px 0;
padding-right:0; */

const Column3=styled(motion.div)`
width:20px;
height:100%;
flex:1;
`
const Titlediv=styled(motion.div)`
overflow:hidden;
width:100% ;
margin-bottom:35px;
`