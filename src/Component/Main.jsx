import React from 'react'
import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import person1Img from '../Images/person1.jfif'
import person2Img from '../Images/person2.jfif'
import fem_person3Img from '../Images/fem_person3.jfif'
import birdImg from '../Images/bird.jfif'
import cookImg from '../Images/cooking.jfif'
import cycleImg from '../Images/bicycle.jfif'
import foodImg from '../Images/food.jfif'
import airbnbLogo from '../Images/airbnb.jfif'
import femTshirtImg from '../Images/fem_tshirt.jfif'
import malTshirtImg from '../Images/mal_tshirt.jfif'
import gitarImg from '../Images/gitar.jfif'
import { Butt } from './Sell'
import '../style.css'

export default function(){
    return (
        
    <Container>
        
            <Box className='logo'>
            <img src={airbnbLogo} alt="" width={100} height={70}/>
            <p className='logo_text'>airbnb</p>
            </Box>
            
    <Box className="main_box">
  
        <Box className='body1'>
        <Stack spacing={2} direction="row">
        <img  className = 'cook' src={cookImg} alt="" width={100} height={70}/>
            <img  className = 'fem' src={fem_person3Img} alt="" width={100} height={70}/>
             <img src={birdImg} alt="" width={100} className="bird" height={70}/>
             <img src={foodImg} alt="" width={100} className = "food" height={70}/>
             </Stack>
             
        </Box>
        <Box className="body2">
             <Stack spacing={2} direction="row">
            <img  className = 'per1' src={person1Img} alt="" width={100} height={70}/>
            <img src={person2Img} alt="" width={100} className = "per2" height={70}/>
             <img src={gitarImg} alt="" width={100} className="gitar" height={70}/>
             </Stack>
             </Box>
        
      <Box className="text_box">

         <h3>Online Experiences</h3>
        <p className='par_text'>Join unique interactive activities led by one-of-a-kind 
            hosts-all without leaving home.
        </p>
      </Box>
       <Butt />
    </Box>
       
    </Container>
    );
}