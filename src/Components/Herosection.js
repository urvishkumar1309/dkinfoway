import React,{useEffect,useState,useRef} from 'react'
import styled, { css }  from 'styled-components';
import {motion,AnimatePresence, useAnimation} from 'framer-motion';
import {IoMdArrowRoundForward} from 'react-icons/io';
import {IoArrowForward,IoArrowBack} from 'react-icons/io5';
import {useDispatch,useSelector} from 'react-redux';
import {titleAnim,fade,imageAnim} from './Animation'
const Herosection = ({sliderfirst}) => {
    const controls=useAnimation();
    const [current,setCurrent]=useState(0);
    const [show,setShow]=useState(false);
    const {data}=useSelector(state=>state.open);
    const timer=useRef(null);
    const [slide,setSlide]=useState(sliderfirst[0])
    const [show1,setShow1]=useState(null);
    useEffect(() => {
        const nextslide =()=>{
            setCurrent(current=>current===sliderfirst.length-1?0:current+1);
        };
        // if(show1){
        // clearTimeout(show1);
        // }
        // const id=setTimeout(() =>{
        //     console.log('done');
        // },3000);
        // setShow1(id);
      
        timer.current=setTimeout(nextslide,5000);
        return function() {
            if(timer.current){
                clearTimeout(timer.current);
            }
        }
        
    });
    const nextslide =()=>{
        if(timer.current){
            clearTimeout(timer.current);
        }
        setCurrent(current=>current===sliderfirst.length-1?0:current+1);
    };
    const previousslide =()=>{
        if(timer.current){
            clearTimeout(timer.current);
        }
        setCurrent(current=>current===0?sliderfirst.length-1:current-1);
    }
    return (
       
        <Herocontainer id="home">
            
            
            <Herowrapper>
         
         
            

                {Array.isArray(sliderfirst) && sliderfirst.length>0 &&

                
(  <AnimatePresence >
    {
                   sliderfirst.map((slide,index)=>{
                
                if(current===index){
            return (
               
                <HeroSlide initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.3,ease:"easeInOut"}}}
                 key={index} exit={{opacity:0,transition:{duration:0.3}}} >
                    <HeroSlider>
                        <Heroimage src={slide.image} />
                        <Herocontent>
                            <motion.h1 variants={titleAnim} initial="hidden" animate="show" >{slide.title}</motion.h1>
                            {/* <Button1 to="plans"   primary={true} css={`width:160px`} >View Homes<Arrow></Arrow></Button1> */}

                            <SVG  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_2" x="0px" y="0px" viewBox="0 0 25.166666 37.8704414" enable-background="new 0 0 25.166666 37.8704414" xmlSpace="preserve">
        <path className="stroke" fill="none" stroke="#c7c4b8" stroke-width="2.5" stroke-miterlimit="10" d="M12.5833445 36.6204414h-0.0000229C6.3499947 36.6204414 1.25 31.5204487 1.25 25.2871208V12.5833216C1.25 6.3499947 6.3499951 1.25 12.5833216 1.25h0.0000229c6.2333269 0 11.3333216 5.0999947 11.3333216 11.3333216v12.7037992C23.916666 31.5204487 18.8166714 36.6204414 12.5833445 36.6204414z"></path>
        <path className="scroller" fill="#c7c4b8" d="M13.0833359 19.2157116h-0.9192753c-1.0999985 0-1.9999971-0.8999996-1.9999971-1.9999981v-5.428606c0-1.0999994 0.8999987-1.9999981 1.9999971-1.9999981h0.9192753c1.0999985 0 1.9999981 0.8999987 1.9999981 1.9999981v5.428606C15.083334 18.315712 14.1833344 19.2157116 13.0833359 19.2157116z"></path>
    
</SVG><i className="icon icon-arrow-down"></i>
                    
                        </Herocontent>
                    </HeroSlider>
                </HeroSlide>
               
             
 )
 
 

 }
  
            })
        }
        </AnimatePresence>
        )

            
              
            
          
            
        }
           
          
            <SlideArrow>
            <ArrowBack isOpen={data} onClick={previousslide} />
            <Arrowforward isOpen={data} onClick={nextslide} />
            
            </SlideArrow>
           
            </Herowrapper>

        </Herocontainer>
       
    )
}
const SVG=styled.svg`
position:absolute;
top:200%;
left:50%;
height:60px;
width:60px;
z-index:99;
vertical-align: middle;
 .stroke {
  stroke: #fff;
}
 .scroller {
  fill: #fff;
  -webkit-animation: updown 1s infinite;
  -moz-animation: updown 1s infinite;
  -o-animation: updown 1s infinite;
  animation: updown 1s infinite;
}

@-webkit-keyframes updown {
    0% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0)
    }
    50% {
        -webkit-transform: translate(0, 5px);
        transform: translate(0, 5px)
    }
    100% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0)
    }
}
@-moz-keyframes updown {
    0% {
        -moz-transform: translate(0, 0);
        transform: translate(0, 0)
    }
    50% {
        -moz-transform: translate(0, 5px);
        transform: translate(0, 5px)
    }
    100% {
        -moz-transform: translate(0, 0);
        transform: translate(0, 0)
    }
}
@-o-keyframes updown {
    0% {
        -o-transform: translate(0, 0);
        transform: translate(0, 0)
    }
    50% {
        -o-transform: translate(0, 5px);
        transform: translate(0, 5px)
    }
    100% {
        -o-transform: translate(0, 0);
        transform: translate(0, 0)
    }
}
@keyframes updown {
    0% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0)
    }
    50% {
        -webkit-transform: translate(0, 5px);
        transform: translate(0, 5px)
    }
    100% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0)
    }
}
`
const Arrowcss=css`
width:60px;
Height:60px;
background:transparent;
color:#fff;
cursor: pointer;
border-radius:50px;
user-select:none;
transition:0.3s;
padding:10px;
margin-right:1rem;
&:hover{
transform:scale(1.05);
background:#f86011;
color:#fff;
}
`
const Arrowforward=styled(IoArrowForward)`
position:absolute;
display:${({isOpen})=>(isOpen ? "none" : "block")};
top:50%;
right:10%;
z-index:99;
transform:translateY(-50%);
${Arrowcss}

`
const ArrowBack=styled(IoArrowBack)`
position:absolute;
display:${({isOpen})=>(isOpen ? "none" : "block")};
top:50%;
left:10%;
z-index:99;
transform:translateY(-50%);
${Arrowcss}
`
const SlideArrow=styled(motion.div)`
/* position:absolute;
bottom:50px;
right:50px;
z-index:10;
display:flex; 
@media screen and (max-width:768px){
    width:100vw;
    right:0px;
    justify-content:center;
    align-items:center;
    margin: 0 auto;
    transition:0.2s;
}   */

`

const Herocontainer =styled.div`
width:100vw;
height:100vh;
overflow:hidden;
position:relative;
`

const Herowrapper = styled.div`
width:100%;
height:100%;
position:relative;
display:flex;
justify-content:center;
align-items:center;
`

const HeroSlide=styled(motion.div)`
width:100%;
height:100%;
z-index:1;
`;
const HeroSlider=styled.div`
position:absolute;
top:0;
left:0;
display:flex;
width:100%;
height:100vh;
justify-content:center;
overflow:hidden;
align-items:center;
&::before{
    content:'';
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    height:100%;
    z-index:2;
    opacity:0.4 ; 
    background:linear-gradient(0deg,rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.6) 50%,rgba(0,0,0,0.8) 100%);
}
`;
const Heroimage=styled.img`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
object-fit:cover;
`;
const Herocontent=styled.div`
position: relative;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
margin-top:100px;
z-index:2 ;
color:#fff;
h1{
    font-size:clamp(1.5rem,8vw,4rem);
    text-transform:uppercase;
    font-weight:400;
    margin-bottom:20px;
    text-shadow:0px 0px 20px rgba(0,0,0,0.4);
}
`;
const Arrow=styled(IoMdArrowRoundForward)`margin-left:5px;

`
export default Herosection;
