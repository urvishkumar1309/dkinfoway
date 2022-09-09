import React from 'react'
import styled from 'styled-components'
import {techstack} from '../data';
import {useDispatch,useSelector} from 'react-redux';
import {teckstackAction} from '../Actions/techstackAction';
const TechStack = () => {
    const dispatch = useDispatch();
    const {techdata} = useSelector(state=>state.teckstack);
  
    return (
        <Container>
            <H1>Technology Stack</H1>
            <Wrapper>
            <Button onClick={()=>{
                dispatch(teckstackAction(techstack.mobile));
            }}>Mobile</Button>
            <Button onClick={()=>{
                dispatch(teckstackAction(techstack.frontend));
            }}>Frontend</Button>
            <Button onClick={()=>{
                dispatch(teckstackAction(techstack.backend));
            }}>Backend</Button>
            <Button onClick={()=>{
                dispatch(teckstackAction(techstack.database));
            }}>Database</Button>
            </Wrapper>
            <Content>
                {Array.isArray(techdata) && techdata.length>0 &&
                techdata.map(data=>{
                    return (
                        <Textwrapper>
                            <img src={data.image} ></img>
                            <h2>{data.title}</h2>
                        </Textwrapper>
                    )
                })
                
                }
              
            </Content>
        </Container>
    )}
    const Textwrapper=styled.div`
        img{
            width:150px;
            height:150px;
            margin-bottom:1rem;
            margin-top:5rem;
            
          margin-left:2rem;
          margin-right:2rem;
          
        }
    `
    const Container =styled.div`
    width:100vw;
    height:90vh ;
    text-align:center;
     `
     const H1=styled.h1`
     font-size:2.5rem;
     margin-top:5rem;
     margin-bottom:7rem;
     `
     const Wrapper =styled.div`
     display:flex;
     width:60%;
     margin:0 auto;
     flex-wrap:wrap;
    justify-content:center;
     `;
     const Button =styled.button`
     flex:1 1 40px;
     font-size:1.5rem;
     padding:1rem;
     border:none;
     background:#f86011;
     margin:0.2rem 0.2rem;
     color:#fff;
     `;
     const Content =styled.div`
     display:flex;
     align-items:center;
     justify-content:center;
     flex-wrap:wrap;

     `;


export default TechStack;
