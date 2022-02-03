import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import data from './data'
import {BottomNavigation, BottomNavigationAction, CardActions, Container, Menu, Tooltip,Grid} from "@mui/material";
import {
    usePopupState,
    bindTrigger,
    bindMenu,
} from 'material-ui-popup-state/hooks'
import "../CSSfolder/Hover.css"
import PopupState from "material-ui-popup-state";
import {alpha, styled} from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import userlogo from "../images/profileicon.jpg"
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import image1 from "../images_cards/hotelcard-1.jpg"
import image2 from "../images_cards/hotelcard-2.jpg"
import image3 from "../images_cards/hotelcard-3.jpg"
import image4 from "../images_cards/hotelcard-4.jpg"
import image5 from "../images_cards/hotelcard-5.jpg"
import {nav} from "../App";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',


    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },


    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


const AfterSearchFromHome=()=>
{
    const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [value, setValue] = React.useState(0);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const click = () => {
        nav('/home')

    }


    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{background:"#CCFFFF"}}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon style={{color:"black"}}>

                            </MenuIcon>

                        </IconButton>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{color:"black",fontFamily:'monospace'}}>
                            News
                        </Typography>
                        <Search style={{color:"black",background:"transparent",alignSelf:"center"}}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search Hotels..."
                                inputProps={{ 'aria-label': 'search' }}

                            />
                        </Search>
                        <Button style={{color:"black",alignSelf:"center",fontFamily:'monospace',fontSize:"large"}}>Login</Button>
                        <Button style={{color:"black",alignSelf:"center",fontFamily:'monospace',fontSize:"large"}}>SignUp</Button>
                        <Button style={{color:"black",marginRight:"20%",fontFamily:'monospace',fontSize:"large"}}>Home</Button>
                        {/*<PopupState variant="popover" popupId="demo-popup-menu">*/}
                        {/*    {(popupState) => (*/}
                        {/*        <React.Fragment>*/}
                        {/*            <Button variant="contained" {...bindTrigger(popupState)}>*/}
                        {/*                Dashboard*/}
                        {/*            </Button>*/}
                        {/*            <Menu {...bindMenu(popupState)}>*/}
                        {/*                <MenuItem onClick={popupState.close}>Profile</MenuItem>*/}
                        {/*                <MenuItem onClick={popupState.close}>My account</MenuItem>*/}
                        {/*                <MenuItem onClick={popupState.close}>Logout</MenuItem>*/}
                        {/*            </Menu>*/}
                        {/*        </React.Fragment>*/}
                        {/*    )}*/}
                        {/*</PopupState>*/}
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings" >
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src={userlogo} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting}  disabled={true} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center" >{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>


            {/*<AppBar position="static">*/}
            {/*    <Container maxWidth="xl">*/}
            {/*        <Toolbar disableGutters>*/}
            {/*            <Box sx={{ flexGrow: 0 }}>*/}
            {/*                <Tooltip title="Open settings">*/}
            {/*                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>*/}
            {/*                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />*/}
            {/*                    </IconButton>*/}
            {/*                </Tooltip>*/}
            {/*                <Menu*/}
            {/*                    sx={{ mt: '45px' }}*/}
            {/*                    id="menu-appbar"*/}
            {/*                    anchorEl={anchorElUser}*/}
            {/*                    anchorOrigin={{*/}
            {/*                        vertical: 'top',*/}
            {/*                        horizontal: 'right',*/}
            {/*                    }}*/}
            {/*                    keepMounted*/}
            {/*                    transformOrigin={{*/}
            {/*                        vertical: 'top',*/}
            {/*                        horizontal: 'right',*/}
            {/*                    }}*/}
            {/*                    open={Boolean(anchorElUser)}*/}
            {/*                    onClose={handleCloseUserMenu}*/}
            {/*                >*/}
            {/*                    {settings.map((setting) => (*/}
            {/*                        <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
            {/*                            <Typography textAlign="center">{setting}</Typography>*/}
            {/*                        </MenuItem>*/}
            {/*                    ))}*/}
            {/*                </Menu>*/}
            {/*            </Box>*/}
            {/*        </Toolbar>*/}
            {/*    </Container>*/}
            {/*</AppBar>*/}

                <Grid  container spacing={4} padding={4} >
                    {data.cardData.map((item,index)=>
                    {
                        return(
                            <Grid item xs={12} md={4}>
                                <Card sx={{ maxWidth: 345 }} className="a" onClick={click}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        src={item.image}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>

                                        <Button size="small">Book now</Button>
                                    </CardActions>
                                </Card>

                            </Grid>
                        )
                    })}




                {/*    <Grid item xs={12} md={4}>*/}
                {/*        <Card sx={{ maxWidth: 345 }} className="a" onClick={click}>*/}
                {/*            <CardMedia*/}
                {/*                component="img"*/}
                {/*                height="140"*/}
                {/*                src={image1}*/}
                {/*                alt="green iguana"*/}
                {/*            />*/}
                {/*            <CardContent>*/}
                {/*                <Typography gutterBottom variant="h5" component="div">*/}
                {/*                    Lizard*/}
                {/*                </Typography>*/}
                {/*                <Typography variant="body2" color="text.secondary">*/}
                {/*                    Lizards are a widespread group of squamate reptiles, with over 6,000*/}
                {/*                    species, ranging across all continents except Antarctica*/}
                {/*                </Typography>*/}
                {/*            </CardContent>*/}
                {/*            <CardActions>*/}

                {/*                <Button size="small">Book now</Button>*/}
                {/*            </CardActions>*/}
                {/*        </Card>*/}

                {/*</Grid>*/}



                {/*    <Grid item xs={12} md={4}>*/}
                {/*        <Card sx={{ maxWidth: 345 }} className="a" onClick={click}>*/}
                {/*            <CardMedia*/}
                {/*                component="img"*/}
                {/*                height="140"*/}
                {/*                src={image1}*/}
                {/*                alt="green iguana"*/}
                {/*            />*/}
                {/*            <CardContent>*/}
                {/*                <Typography gutterBottom variant="h5" component="div">*/}
                {/*                    XXXXX*/}
                {/*                </Typography>*/}
                {/*                <Typography variant="body2" color="text.secondary">*/}
                {/*                    Lizards are a widespread group of squamate reptiles, with over 6,000*/}
                {/*                    species, ranging across all continents except Antarctica*/}
                {/*                </Typography>*/}
                {/*            </CardContent>*/}
                {/*            <CardActions>*/}

                {/*                <Button size="small">Book now</Button>*/}
                {/*            </CardActions>*/}
                {/*        </Card>*/}
                {/*    </Grid>*/}


                {/*    <Grid className="a" item xs={12} md={4} >*/}
                {/*        <Card sx={{ maxWidth: 345 }} className="a" onClick={click} >*/}
                {/*            <CardMedia*/}
                {/*                component="img"*/}
                {/*                height="140"*/}
                {/*                src={image1}*/}
                {/*                alt="green iguana"*/}
                {/*            />*/}
                {/*            <CardContent>*/}
                {/*                <Typography gutterBottom variant="h5" component="div">*/}
                {/*                    PPPPPP*/}
                {/*                </Typography>*/}
                {/*                <Typography variant="body2" color="text.secondary">*/}
                {/*                    Lizards are a widespread group of squamate reptiles, with over 6,000*/}
                {/*                    species, ranging across all continents except Antarctica*/}
                {/*                </Typography>*/}
                {/*            </CardContent>*/}
                {/*            <CardActions>*/}

                {/*                <Button size="small">Book now</Button>*/}
                {/*            </CardActions>*/}
                {/*        </Card>*/}

                {/*    </Grid>*/}


                </Grid>

            <Box sx={{ width: "100%" }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >

                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </BottomNavigation>
            </Box>

        </div>
    )
}
export default AfterSearchFromHome;