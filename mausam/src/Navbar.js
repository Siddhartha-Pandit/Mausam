import logo from './logolight.png'
import './App.css'
import * as React from 'react';
import Main from './Main';
import Button from '@mui/material/Button';
import useFetch from './useFetch';

import { useEffect, useState } from 'react';

import { BsSearch } from "react-icons/bs";
import Toggle from './Toggle';
const NavBar = () => {
    const [dark, setDark] = useState(false)
    const [actualData, setActualData] = useState('');
    const [lat, setlat] = useState('');
    const [lon, setlon] = useState('')
    function success(position) {
        const lati = position.coords.latitude
        const long = position.coords.longitude
        setlat(lati)
        setlon(long)
    }
    const error = () => {
        console.log("unable to fetch locatio")
    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error)
    }, [])

    const key = "83050b13a51a4971ad17ea57772ac55a"
    let uri = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${key}`
    const { data } = useFetch(uri)
    useEffect(() => {
        const ci = data && data.results[0].components.city
        setActualData(ci)

    }, [data])


    useEffect(() => {
        const getCurrentTime = () => {
            const obj = new Date()
            let curhrs = obj.getHours()


            if (curhrs >= 18) {
                setDark(true)

            }
            else {
                setDark(false)

            }
        }
        getCurrentTime();
    }, [])


    const [searchData, setSearchData] = useState('');

    const r = document.querySelector(':root');


    if (dark === true) {
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
        r.style.setProperty("--circle", "#3D4144")
        r.style.setProperty("--supp-color", "#555555")
        r.style.setProperty("--gold", "#FFE040")
        r.style.setProperty("--light-blue", "#93C6F7")
        r.style.setProperty("--white", "#272822")
        r.style.setProperty("--text", "#fff")
        r.style.setProperty("--navbar", "#272727")
        r.style.setProperty("--infoCircle", "#121212")
        r.style.setProperty("--horizonfill", "#555555")
        r.style.setProperty("--mirrorup", "#130c0766")
        r.style.setProperty("--mirrordown", "#130c0733")
        r.style.setProperty("--thermoup", "#ECF3F866")
        r.style.setProperty("--thermodown", "#ECF3F833")
    }
    else {
        r.style.setProperty("--circle", "#b7c2cb")
        r.style.setProperty("--supp-color", "#ecf3f8")
        r.style.setProperty("--gold", "#dca84e")
        r.style.setProperty("--light-blue", "#24609B")
        r.style.setProperty("--white", "#fff")
        r.style.setProperty("--text", "#000")
        r.style.setProperty("--navbar", "#d8d8d8")
        r.style.setProperty("--infoCircle", "#ededed")
        r.style.setProperty("--horizonfill", "#ffffff")
        r.style.setProperty("--mirrorup", "#ECF3F866")
        r.style.setProperty("--mirrordown", "#ECF3F833")
        r.style.setProperty("--thermoup", "#24609B66")
        r.style.setProperty("--thermodown", "#24609B33")
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
                                <input type='text' value={searchData} placeholder="search something here..." className="searchbox" onChange={(e) => setSearchData(e.target.value)}></input>
                            </form>


                        </div>
                        <Button variant="contained" className='but' onClick={(e) => setActualData(searchData)}><BsSearch className='seaaa' /></Button>
                    </div>
                    {/*  */}
                    <div className='sett'>  <Toggle onClick={() => setDark(!dark)} /></div>
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