import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';
import { FaBeer} from 'react-icons/fa';
import { AiOutlineMail ,AiOutlinePhone} from 'react-icons/ai';
const Contactus=()=>{
return (
<Contactcontainer id="contact">
    <ContactH1 > CONTACT US</ContactH1> 
    <Address ><Ch4>111, Rajlaxmi-2, near kantareshwar mahadev temple, katargam, surat-4</Ch4></Address>  
    <CEmail ><AiOutlineMail /> <Ch4>hyeoninfotech@gmail.com</Ch4> </CEmail>
    <CPhone ><AiOutlinePhone /><Ch4>+91 97274-63013</Ch4></CPhone>
    
</Contactcontainer>
);
}

const Contactcontainer =styled(motion.div)`
background:fff;
color:white;
background:#f86011;
display:flex;
min-height:100vh;
justify-content:center;
flex-direction:column;
align-items:center;
padding:50px;

margin:0px;
@media screen and (max-width:480px){
    padding:5px 2px;
}
`
const ContactH1 =styled(motion.h1)`
font-size:40px;
margin-bottom:20px;
text-align:center;
`
const Address =styled(motion.p)`
padding:0;
margin-bottom:20px;
text-align:center;
color:#010606;
@media screen and (max-width:768px){
    padding:0px 10px;
    
}
@media screen and (max-width:480px){
    padding:0px 2px;
    margin-left:0px;
    margin-right:0px;
}
`
const CEmail =styled(motion.p)`
display:flex;
justify-content:center;
align-items:center;
font-size:1.5rem;
text-align:center;
padding:0;
margin-bottom:20px;
@media screen and (max-width:768px){
    padding:0px 10px;
}
@media screen and (max-width:480px){
    padding:0px 5px;
}
`
const CPhone =styled(motion.p)`

display:flex;
justify-content:center;
align-items:center;
font-size:1.5rem;
text-align:center;
padding:0;
@media screen and (max-width:768px){
    padding:0px 10px;
}
@media screen and (max-width:480px){
    padding:0px 2px;
}

`
const Ch4 =styled(motion.h4)`
    padding:0%;
    font-size:clamp(1rem,6vw,1.5rem);
    font-weight:lighter;
`
export default Contactus;
