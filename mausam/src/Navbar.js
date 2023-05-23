import logo from './logolight.png'
import './App.css'
import * as React from 'react';
import Main from './Main';
import Button from '@mui/material/Button';


import { useState } from 'react';

import { BsSearch } from "react-icons/bs";
import Toggle from './Toggle';
// import './App.css'
const NavBar = () => {
    // const [city, setCity] = useState(null)
    
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bbff79c48d5f5275d125ff06e7347d5c`
    // const {data:content}=useFetch(url)
    const [searchData , setSearchData] = useState('');
    const [actualData,setActualData] = useState('');
    const [dark,setDark]=useState(false)
    console.log(dark);
    const r=document.querySelector(':root');
    console.log(r);
    if(dark===true){
//        
//   
//   --set-color:#657b8e;
//   

//   --infoCircle:#ededed;
//   --navbar:#d8d8d8;

//   --horizon:#a7a7a7;
//   --spx:#999999;
//   --shadowBlack:rgba(0,0,0,0.202);
//   --shadowWhite:rgba(255,255,255,0.719);
        r.style.setProperty("--circle","#3D4144")
        r.style.setProperty("--supp-color","#555555")
        r.style.setProperty("--gold","#FFE040")
        r.style.setProperty("--light-blue","#93C6F7")
        r.style.setProperty("--white","#272822")
        r.style.setProperty("--text","#fff")
        r.style.setProperty("--navbar","#272727")
        r.style.setProperty("--infoCircle","#121212")
        r.style.setProperty("--horizonfill","#555555")
        r.style.setProperty("--mirrorup","#130c0766")
        r.style.setProperty("--mirrordown","#130c0733")
        r.style.setProperty("--thermoup","#ECF3F866")
        r.style.setProperty("--thermodown","#ECF3F833")
    }
    else{
        r.style.setProperty("--circle","#b7c2cb")
        r.style.setProperty("--supp-color","#ecf3f8")
        r.style.setProperty("--gold","#dca84e")
        r.style.setProperty("--light-blue","#24609B")
        r.style.setProperty("--white","#fff")
        r.style.setProperty("--text","#000")
        r.style.setProperty("--navbar","#d8d8d8")
        r.style.setProperty("--infoCircle","#ededed")
        r.style.setProperty("--horizonfill","#ffffff")
        r.style.setProperty("--mirrorup","#ECF3F866")
        r.style.setProperty("--mirrordown","#ECF3F833")
        r.style.setProperty("--thermoup","#24609B66")
        r.style.setProperty("--thermodown","#24609B33")
    }
    return (
        <div>
            <div className='navbar'>
                <nav className='navi'>
                    <div className='logo'>
                        <img src={logo} alt="logo" ></img>
                        <div>Mausam</div>
                    </div>
                    <div className='seacont'>
                        <div className='search'>
                            <form>
                                <input type='text' value = {searchData} placeholder="search something here..." className="searchbox" onChange={(e)=>setSearchData(e.target.value)}></input>
                            </form>


                        </div>
                        <Button variant="contained" className='but' onClick={(e) => setActualData(searchData)}><BsSearch className='seaaa' /></Button>
                    </div>
                 
                    <div className='sett'>  <Toggle onClick={()=>setDark(!dark)} /></div>
                </nav>
            </div>
            <div>
                {/* {actualData && <Main items={actualData} />} */}
                <Main items={actualData} />
                </div>
        </div>
    );
}
export default NavBar;