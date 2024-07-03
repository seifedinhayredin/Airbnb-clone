import malTshirtImg from '../Images/mal_tshirt.jfif'
import femTshirtImg from '../Images/fem_tshirt.jfif'
import cycleImg from '../Images/bicycle.jfif'
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import RatingData from './RatingData';
import imageData from './imageData';

import Rating from './Rating'
import '../style.css'
export default function Sell(props){
    const rateElements = RatingData.map(rates => {
        return <Rating 
        country1 = {rates.country1} 
        title = {rates.title1}
        price = {rates.price1}
        value = {rates.value1}
        rate = {rates.rate1}

        country2 = {rates.country2} 
        title1 = {rates.title2}
        price1 = {rates.price2}
        value1 = {rates.value2}
        rate1 = {rates.rate2}

        country3 = {rates.country3} 
        title2 = {rates.title3}
        price2 = {rates.price3}
        value2 = {rates.value3}
        rate2 = {rates.rate3}

        />
    })
    
    return (
<Container>

    
    <Box  className='sellCont'>
    <Stack spacing={2} direction="row">
        
        <img src= {props.maleImg} alt="" width={150} className = "maltshirt" height={150} />
        <img src={props.femaleImg} alt="" width={150} className = "femtshirt" height={150} />
        <img src={props.cycleImg} alt="" width={150} className = "cycle" height={150} />
        </Stack>
    </Box>
    <Box className = "ratBox">
    
    {rateElements}
   
    </Box>
    
  
</Container>
    );
}
export  function Butt(){
    return (
        <Box sx={{pr: '2'}} className='butt'>
    <Stack spacing={5} direction="row">
        
        <Button variant='contained' >Sold out</Button>
        <Button variant='outlined' className='onlineButt' style={{backgroundColor:"black"}}>Online</Button>
        
        </Stack>
    </Box>
    );
}