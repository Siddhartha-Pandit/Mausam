import logo from './logolight.png'
import './App.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { SlSettings} from "react-icons/sl";

import { BsSearch} from "react-icons/bs";
const NavBar = () => {
    return (
        <div className='navbar'>
            <nav className='navi'>
                <div className='logo'>
                    <img src={logo} alt="logo" ></img>
                    <div>Mausam</div>
                </div>
                <div className='seacont'>
                    <div className='search'>
                        <form>
                            <input type='text' placeholder="search something here..." className="searchbox"></input>

                        </form>


                    </div>
                    <Button variant="contained" className='but'><BsSearch className='seaaa' /></Button>
                </div>
                <div className='sett'><SlSettings className='settico' /></div>
            </nav>
        </div>
    );
}
export default NavBar;