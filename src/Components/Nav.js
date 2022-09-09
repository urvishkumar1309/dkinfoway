import {motion} from 'framer-motion';
import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS,animateScroll as scroll} from 'react-scroll';
import {useDispatch,useSelector} from 'react-redux';
// import logo from '../Img/main1.png';
// import ScrollToTop from "react-scroll-to-top";
import react,{useEffect, useState} from 'react';
import {burgerAction} from '../Actions/burgerAction';
 const Nav=({isOpen,setisOpen})=>{
     const dispatch=useDispatch();
     const {data}=useSelector(state=>state.open);
    const [navbar,setnavbar]=useState(false);
    const toggle=(e)=>{
        
        dispatch(burgerAction());
        console.log(e);
    }
    const changeNav =()=>{
        if(window.scrollY>=85){
            setnavbar(true);
        }
        else{
            setnavbar(false);
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeNav);
    },[]);
    
    return(   
        <Navmain style={{position:"fixed"}} navbar={navbar} isOpen={data}>

    <Navheader navbar={navbar} >
        <motion.div style={{display: "flex",alignItems:"center",justifyContent:"flex-start",width:"500px",height:"100%", padding:"",flex:1}}>
    {/* <Logoimg src={logo}></Logoimg> */}
    <Navitem1><NavLink1 to="home" 

        spy={true}
        smooth={true}
        offset={-75}
        duration={500}
        exact="true"
        onClick={toggle}
        >DK INFOWAY</NavLink1></Navitem1>
    </motion.div>
    <Mobileul isOpen={data}>
        <Fontdiv onClick={toggle}>
        <Icondiv1 isOpen={data}></Icondiv1>
        <Icondiv2 isOpen={data}></Icondiv2>
        <Icondiv3 isOpen={data}></Icondiv3>
        </Fontdiv>
        
    <Slidbar isOpen={data}>
    <Slid isOpen={data} navbar={navbar}>
        <Navitem><NavLink to="home" 

        spy={true}
        smooth={true}
        offset={-75}
        duration={500}
        exact="true"
        onClick={toggle}
        >Home</NavLink></Navitem>
        <Navitem><NavLink to="about"
        spy={true}
        smooth={true}
        exact="true"
        offset={-75}
        duration={500}
        onClick={toggle}>About Us</NavLink></Navitem>
        <Navitem><NavLink to="services"
        spy={true}
        smooth={true}
        exact="true"
        offset={-75}
        duration={500}
        onClick={toggle}>Services</NavLink></Navitem>
        <Navitem><NavLink to="contact"

        spy={true}
        smooth={true}
        offset={-75}
        exact="true"
        duration={500}
        onClick={toggle}>Contact Us</NavLink></Navitem>
        </Slid> 
    </Slidbar>
    
    </Mobileul>
    <Navul>
        <Navitem><NavLink to="home" 
        
        spy={true}
        smooth={true}
        offset={-75}
        exact="true"
        duration={500}>Home</NavLink></Navitem>
        <Navitem style={{margin:'0rem 2rem'}}><NavLink to="about"
        //   activeStyle={{
        //     fontWeight: "bold",
        //     color: "red"
        //   }}
        spy={true}
        smooth={true}
        offset={-75}
        exact="true"
        duration={500}>About Us</NavLink></Navitem>
        <Navitem style={{margin:'0rem 1rem'}}><NavLink to="services" 
        spy={true}
        smooth={true}
        offset={-75}
        exact="true"
        duration={500}>Services</NavLink></Navitem>
        <Navitem style={{margin:'0rem 1rem'}}><NavLink to="contact" 
        spy={true}
        smooth={true}
        offset={-75}
        exact="true"
        duration={500}>Contact Us</NavLink></Navitem>
    </Navul>
    </Navheader>
    </Navmain>
    
    );
} 
const Logoimg=styled(motion.img)`
/* margin-top:10px; */
width:450px;
height:auto;
object-fit:fill;
@media screen and (max-width:1140px){
    width:300px;
}
@media screen and (max-width:400px){
    width:200px;
}
`
const Icondiv1=styled(motion.div)`
padding:0.15rem 1.2rem;
margin:0.2rem 0rem;
background:${({navbar})=>(navbar ? '#fff':'black')};
position:relative;
border-radius:30px;
z-index:999;
transform:${({isOpen}) =>(isOpen?"rotateZ(45deg) translateY(250%)":"rotateZ(0deg) translateY(0%)")};
transition:0.5s ease-in-out;
pointer-events:none;

`;
const Icondiv2=styled(motion.div)`
position:relative;
padding:0.15rem 1.2rem;
margin:0.2rem 0rem;
background:${({navbar})=>(navbar ? '#fff':'black')};
position:relative;
border-radius:30px;
z-index:999;
opacity:${({isOpen})=>( isOpen?0:1)};
transition: 0.5s ease-in-out;
pointer-events:none;
`;
const Icondiv3=styled(motion.div)`
position:relative;
padding:0.15rem 1.2rem;
margin:0.2rem 0rem;
background:${({navbar})=>(navbar ? '#fff':'black')};
position:relative;
border-radius:30px;
z-index:999;
transform:${({isOpen}) =>(isOpen?"rotateZ(-45deg) translateY(-250%)":"rotateZ(0deg) translateY(0%)")};
transition:transform 0.5s ease-in-out;
pointer-events:none;
`;
const Slid=styled(motion.div)`
width:100%;
height:100%;
position:absolute;
flex-direction:column;
background:#fff;
top:0%;
margin-top:${({navbar})=>(navbar ? '82px':'100px')};
padding-top:50px;
left:0%;
height:${({isOpen})=>(isOpen ? '100%':'0%')}; 
opacity:${({isOpen})=>(isOpen ? 1:0)};
display:flex;
z-index:999;
grid-template-columns:1fr;
grid-template-rows:repeat(6,100px);
li{
    margin:50px 0px;
    color:black;
    &:hover{
        color:#f86011;
    }
}
`
const Slidbar=styled(motion.div)`
display:flex;
position:fixed;
top:0;
left:0;
width:100%;
height:100%; 
z-index:9;
transform:${({isOpen})=>(isOpen ? 'translateX(0%)':'translateX(100%)')}; 
opacity:${({isOpen})=>(isOpen ? 1:0)};
transition: all 0.5s ease-in-out ;

/* @media screen and (max-width:960px){


} */
`
const Navmain =styled(motion.nav)`
position:fixed; 
margin-top:1rem;
background:${({navbar})=>( navbar?"#fff":"transparent")};

border-radius:10px;
color:black;
box-shadow:${({navbar})=>( navbar?"0px 3px 5px rgba(0,0,0,0.2)":"none")};
height:${({navbar})=>( navbar?"80px":"150px")};
width:100vw;
background:transperent;
/* position:absolute; */

margin-top:0px;
top:0;
left:0;
color:${({navbar})=>(navbar ? 'black':'#fff')};
/* color:white; */
z-index: 99;
transition:0.5s ease;
`;
const Navheader=styled(motion.div)`
display:flex;
justify-content:space-between;
height:100% ;
width:${({navbar})=>( navbar?"75%":"85%")};
margin:0 auto;
transition:0.5s ease;
align-items:center;

h1{
    flex:1;
    font-size:2rem;
    font-weight:normal;
    font-family: 'Lobster', cursive;
}

`;
const Navul=styled(motion.ul)`
display:flex;
justify-content:space-around;
align-items:center;
list-style:none;
width:100% ;
height:100% ;
flex:1;
@media screen and (max-width:960px){
    display:none;
}
`;
const Navitem=styled(motion.li)`
font-size:1.5rem;
font-weight:lighter;
text-align:center;
padding:0rem; 
list-style:none;
`;

const NavLink=styled(LinkS)`
    cursor: pointer;
    white-space: nowrap;
    padding:25px 0;
    &.active{
    color:#f86011;
    }
`;
const Navitem1=styled(motion.li)`
font-size:1.5rem;
font-weight:lighter;
text-align:center;
padding:0rem; 
list-style:none;
`;

const NavLink1=styled(LinkS)`
    cursor: pointer;
    white-space: nowrap;
    padding:25px 0;
    
`;
const Mobileul=styled(motion.ul)`
display:none;
list-style:none;
@media screen and (max-width:960px){
    display:block;
}
`



const Fontdiv=styled(motion.div)`
display:none;
background:none; 
@media screen and (max-width:960px){
    position:relative;
    display:flex;
    height:100% ;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    cursor: pointer;
    z-index:999;
}

`
export default Nav;