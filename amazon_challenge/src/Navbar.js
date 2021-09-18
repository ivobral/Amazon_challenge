import React from 'react';
import './Navbar.css';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left__navbar">
                <img 
                    className="logo__navbar" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                />
                <div className="left__navbar__option">
                    <LocationOnOutlinedIcon className="location__logo" fontSize='small'/>
                    <span className="delivery__navbar__lineOne">Deliver to </span>
                    <span className="delivery__navbar__lineTwo">Croatia</span>
                </div>
            </div>
            <div className="search__navbar">
                <input className="searchInput__navbar" />
            </div>
            <div className="right__navbar">
                <FormControl variant="outlined" className="flag__menuNav">
                    <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>  
                <div className="right__navbnar__option">
                    <span className="signIN__navbar__lineOne">Hello, Sign in </span>
                    <span className="signIn__navbar__lineTwo">Account & Lists</span>
                </div>
                <div className="right__navbnar__option">
                    <span className="returns__navbar__lineOne">Returns </span>
                    <span className="returns__navbar__lineTwo">& Orders</span>
                </div>
                <div className="cart__navbar">
                    <ShoppingBasketOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Navbar
