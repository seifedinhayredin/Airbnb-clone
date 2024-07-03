import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import '../style.css'
export default function Rating(props){
    return (
       
            <div className="rat">
            <Box className="rating11">
                {props.rate && <p><StarOutlinedIcon /> {props.rate} ({props.value}) +{props.country1}</p>}
                <p>{props.title}</p>
                {props.price && <p><b>From ${props.price}</b> /person</p>}
            </Box>
            <Box className="rating21">
                {props.rate1 && <p><StarOutlinedIcon /> {props.rate1}({props.value1}) +{props.country2}</p>}
                <p>{props.title1}</p>
                {props.price1 && <p><b>From ${props.price1}</b> /person</p>}
            </Box>
            <Box className="rating31">
                {props.rate2 && <p><StarOutlinedIcon /> {props.rate2} ({props.value2}) +{props.country3}</p>}
                <p>{props.title2}</p>
                {props.price2 && <p><b>From ${props.price2} </b>/person</p>}
            </Box>
            </div>
      
    );
}