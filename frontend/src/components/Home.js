import React from 'react'
import Navbar from './Navbar'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import {Carousel} from "react-bootstrap";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import image1 from "../images_cards/hotelcard-1.jpg"
import image2 from "../images_cards/hotelcard-2.jpg"
import image3 from "../images_cards/hotelcard-3.jpg"
import image4 from "../images_cards/hotelcard-4.jpg"
import image5 from "../images_cards/hotelcard-5.jpg"
import {Button, Grid, Rating, TextField} from "@mui/material";
import { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import countries from "i18n-iso-countries";
// Import the languages you want to use
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import {SearchOutlined} from "@mui/icons-material";
import {nav} from "../App";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Home= () =>{

    const [expanded, setExpanded] = React.useState(false);
    const [date,setDate]=useState(new Date());
    const handleFactoryDateChange = (newValue) => {

        setDate(newValue);
    };



    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [selectedCountry, setSelectedCountry] = useState("");

    const selectCountryHandler = (value) => setSelectedCountry(value);

    // Have to register the languages you want to use
    countries.registerLocale(enLocale);
    countries.registerLocale(itLocale);

    // Returns an object not a list
    const countryObj = countries.getNames("en", { select: "official" });

    const countryArr = Object.entries(countryObj).map(([key, value]) => {
        return {
            label: value,
            value: key
        };
    });

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange=(date)=>
    {
        setSelectedDate(date);

    };
    const [date2,setDate2]=useState(new Date());
    const handleFactoryDateChange2 = (newValue2) => {

        setDate2(newValue2);
    };
    const buttonclick=()=>
    {
        nav('/afterSearchFromHome')
    }

    return(
        <div>
            <Navbar/>

            <div style={{display:"flex",
                flexDirection:"row"}} >
                <Select
                    style={{ width: "150px",marginLeft:"200px",background:"transparent",border:"black"}}
                    value={selectedCountry}
                    onChange={(e) => selectCountryHandler(e.target.value)}
                >
                    {!!countryArr?.length &&
                        countryArr.map(({ label, value }) => (
                            <MenuItem key={value} value={value}>
                                {label}
                            </MenuItem>
                        ))}
                </Select>


                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        value={date}
                        onChange={handleFactoryDateChange}
                        label="Arrival date"
                        inputFormat="MM/dd/yyyy"

                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        value={date2}
                        onChange={handleFactoryDateChange2}
                        label="Checkout Date"
                        inputFormat="MM/dd/yyyy"
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <Button variant="contained" style={{background:"transparent",color:"black"}} onClick={buttonclick}>Search
                    </Button>



            </div>


            <div>
                <Carousel style={{height:"600px"}}>
                    <Carousel.Item interval={1000} >
                        <img style={{height:"500px"}}
                            className="d-block w-100"
                            src="finalforsignup/img/hotelpic2.jpeg"
                            alt="First slide"

                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img style={{height:"500px"}}
                            className="d-block w-100"
                            src="finalforsignup/img/hotelpic3.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img style={{height:"500px"}}
                            className="d-block w-100"
                            src="finalforsignup/img/hotelpic4.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <h1 style={{height:"20%"}}>hjsdvkjwdsbcfdwd</h1>
                <Grid  container spacing={4} padding={4}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ Width:"100%" }} >
                            <CardHeader
                                style={{
                                    fontStyle:"oblique",fontFamily:"fantasy"
                                }}
                                avatar={
                                    <Avatar sx={{ bgcolor: "#1B1A1C"}} aria-label="recipe">
                                        H
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Meriton Suites Kent Street, Sydney"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                src={image2}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Rating name="size-medium" defaultValue={2} />
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph style={{font:"icon",fontFamily:"fantasy"}}>
                                        From
                                    </Typography>
                                    <Typography paragraph style={{font:"icon",fontFamily:"fantasy"}}>
                                        BDT 8,598
                                    </Typography>
                                    <Typography paragraph style={{font:"icon",fontFamily:"fantasy"}}>
                                        For tonight
                                    </Typography>

                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ Width:"100%" }} >
                            <CardHeader
                                style={{
                                    fontStyle:"oblique",fontFamily:"fantasy"
                                }}
                                avatar={
                                    <Avatar sx={{ bgcolor: "#1B1A1C" }} aria-label="recipe">
                                        H
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Hotel Crowne Plaza, Canada"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                src={image1}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Rating name="size-medium" defaultValue={3} />

                                {/*<Typography variant="body2" color="text.secondary">*/}
                                {/*    This impressive paella is a perfect party dish and a fun meal to cook*/}
                                {/*    together with your guests. Add 1 cup of frozen peas along with the mussels,*/}
                                {/*    if you like.*/}
                                {/*</Typography>*/}
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>

                                    <Typography paragraph style={{font:"icon",fontFamily:"fantasy"}}>
                                        From
                                    </Typography>
                                    <Typography paragraph style={{font:"icon",fontFamily:"fantasy"}}>
                                        BDT 8,598
                                    </Typography>
                                    <div style={{display:"flex",flexDirection:"row"}}>
                                        <Typography paragraph style={{font:"icon",fontFamily:"fantasy"}}>
                                            For tonight
                                        </Typography>
                                        {/*<Button variant="contained" color="success" style={{*/}
                                        {/*    background:"#F9F6FB",*/}
                                        {/*    color:"black",*/}
                                        {/*    fontFamily:"fantasy",*/}
                                        {/*    fontStyle:"oblique",*/}
                                        {/*    marginLeft:"40%"*/}
                                        {/*}}>*/}
                                        {/*    Book Now*/}
                                        {/*</Button>*/}
                                    </div>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ width:"100%" }} >
                            <CardHeader
                                style={{
                                    fontStyle:"oblique",fontFamily:"fantasy"
                                }}
                                avatar={
                                    <Avatar sx={{ bgcolor: "#1B1A1C"}} aria-label="recipe">
                                        H
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Meriton Suites Kent Street, Sydney"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                src={image2}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Rating name="size-medium" defaultValue={2} />
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph style={{font:"icon",fontFamily:"fantasy"}}>
                                        From
                                    </Typography>
                                    <Typography paragraph style={{font:"icon",fontFamily:"fantasy"}}>
                                        BDT 8,598
                                    </Typography>
                                    <Typography paragraph style={{font:"icon",fontFamily:"fantasy"}}>
                                        For tonight
                                    </Typography>

                                </CardContent>
                            </Collapse>
                        </Card>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ Width:"100%" }} >
                            <CardHeader
                                style={{
                                    fontStyle:"oblique",fontFamily:"fantasy"
                                }}
                                avatar={
                                    <Avatar sx={{ bgcolor: "#1B1A1C"}} aria-label="recipe">
                                        H
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Meriton Suites Kent Street, Sydney"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                src={image2}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Rating name="size-medium" defaultValue={2} />
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph style={{font:"icon",fontFamily:"fantasy"}}>
                                        From
                                    </Typography>
                                    <Typography paragraph style={{font:"icon",fontFamily:"fantasy"}}>
                                        BDT 8,598
                                    </Typography>
                                    <Typography paragraph style={{font:"icon",fontFamily:"fantasy"}}>
                                        For tonight
                                    </Typography>

                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>

                </Grid>




            </div>

        </div>
    )
}

export default Home