import Main from "./Component/Main";
import Sell from "./Component/Sell";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import './style.css'

import imageData from "./Component/imageData";
export default function App(){
    const sellElements = imageData.map(image => {
        return <Sell 
        maleImg = {image.image2} 
        femaleImg = {image.image1} 
        cycleImg= {image.image3}
        />
    })
    return (
        <Container >
<Box className="mainCont">
    <Main />
    {sellElements}
</Box>
   
        </Container>

    );
}