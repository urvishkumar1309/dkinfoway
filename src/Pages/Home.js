import React from 'react'
import Nav from '../Components/Nav'
import Herosection from '../Components/Herosection'
import {sliderfirst} from '../data'
import Infosection from '../Components/Infosection';
import Servicesection from '../Components/Servicesection';
import Stages from '../Components/Stages';
import Work from '../Components/Work';
import Choose from '../Components/Choose';
import TechStack from '../Components/TechStack';
import Contactus from '../Components/Contactus'
const Home = () => {
    return (
        <div style={{overflowX: 'hidden'}}>
           <Nav></Nav> 
           <Herosection sliderfirst={sliderfirst} />
           <Infosection></Infosection>
           <Servicesection></Servicesection>
           <Stages />
           <Work />
           <Choose></Choose>
        <TechStack></TechStack>
        <Contactus />
        </div>
    )
}

export default Home
