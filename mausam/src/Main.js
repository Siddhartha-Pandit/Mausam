import { useEffect,  useState } from "react";
import background from "./clearskyday.jpg";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineDeviceThermostat, MdOutlineWaterDrop } from "react-icons/md";
import { WiSunrise, WiSunset } from "react-icons/wi";
import { BiWind } from "react-icons/bi";
import { FaSun } from "react-icons/fa";
import { BsArrowDownRight } from "react-icons/bs";
import { CiDroplet } from "react-icons/ci";
import { BsThermometerHalf } from "react-icons/bs";
import useFetch from "./useFetch";



const Main = (props) => {
    const items = props.items;
    // console.log(`${items} in main react component`)
    const [city, setCity] = useState('Bengaluru');

    useEffect(() => {
        setCity(items)
    }, [items]);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bbff79c48d5f5275d125ff06e7347d5c`
    const { data: content } = useFetch(url)
    // const [city , setCity] = useState('Bengaluru');
    const windAngle= content && content.wind.deg
    // const windAngle= 180;
    const deg=windAngle -135
    const actualangle=deg+"deg"
    const r=document.querySelector(':root')
    r.style.setProperty("--comapss-arrowAngle",`${actualangle}`)
    const atmpress=content && content.main.pressure
    const pressdeg=(((atmpress-870)/360)*360)+90
    const atmpressdeg=pressdeg+"deg"
    r.style.setProperty("--baro-anima",`${atmpressdeg}`)
    const sunrisetime= content && content.sys.sunrise
    const sunsettime= content && content.sys.sunset
    const currtime= content && content.dt
    const sundeg=((currtime - sunrisetime)/(sunsettime - sunrisetime))*180;
    const sundegstr=sundeg+"deg"
    if(sundeg>=180){
        r.style.setProperty("--progress","#24609B")
        r.style.setProperty("--circleroto","90deg")
        r.style.setProperty("--horizonroto","-90deg")
        const a=sundeg-179;
        const b=a+"deg"
        r.style.setProperty("--sun-angle",`${b}`)
    }
    else{
        r.style.setProperty("--progress","#dca84e")
        r.style.setProperty("--circleroto","-90deg")
        r.style.setProperty("--horizonroto","90deg")
        r.style.setProperty("--sun-angle",`${sundegstr}`)
    }
    function unixtoreal(timestamp) {
        const tz = content && content.timezone
        console.log(tz);
        const ttt = tz * 1000
        const timee = timestamp * 1000;
        let dateobj = new Date(timee + ttt);
        const timeOptions = { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' };
        const formattedTime = dateobj.toLocaleTimeString([], timeOptions);
        return (formattedTime);
    }
    function realtime(offsetSeconds) {

        const offsetMilliseconds = offsetSeconds * 1000;

        const dateObj = new Date(Date.now() + offsetMilliseconds);
        const timeOptions = { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' };
        const formattedTime = dateObj.toLocaleTimeString([], timeOptions);
        return (formattedTime)
    }


    return (
        <div className="main">

            <div className="cardcont">
                <div className="info" style={{
                    backgroundImage: `URL(${background})`

                }}>


                    <div className="whole" >

                        <div className="locatime">
                            <div className="loca"><HiLocationMarker /> {content && content.name}  </div>

                            <div className="time">Today {realtime(content && content.timezone)}</div>
                        </div>
                        <div className="tempdesc">

                            <div className="temp"> {content && content.main.temp}°C</div>
                            {content && content.weather.map((cont, index) => (

                                <div key={index}>
                                    <div className="desc"> {cont.description}</div>
                                </div>

                            ))}
                        </div>
                        <div className="otherdata">

                            <div><MdOutlineDeviceThermostat /> {content && content.main.pressure} hpa</div>

                            <div><MdOutlineWaterDrop /> {content && content.main.humidity}%</div>

                            <div> <BiWind />  {content && content.wind.speed}m/s</div>
                        </div>


                    </div>

                    <div className="sunriseset">

                        <div className="circle">
                            <div className="innercic">

                                <div className="timecont">

                                    <div className="sun"> <div className="san rise"><WiSunrise /></div><div className="indi">Sunrise</div><div className="tex">{unixtoreal(content && content.sys.sunrise)}</div></div>

                                    <div id="horizon">Horizon</div>

                                    <div className="sanogolo">
                                        <FaSun id="suryarachandrama" />

                                    </div>
                                    <div className="sun moon"> <div className="san set"><WiSunset /></div><div className="tex"><div className="indi">Sunset</div>{unixtoreal(content && content.sys.sunset)}</div></div>
                                </div>
                            </div>

                            {/* <div className="dyna"> */}


                            {/* </div> */}
                        </div>

                    </div>


                </div>
            </div>

            <div className="sub">

                <div className="supp">

                    <div className="pex">
                        Wind
                        <div className="pex spx">Today wind speed</div>
                        <div> {content && content.wind.speed} m/s</div>
                    </div>
                    <div> <div id="compass">
                        <BsArrowDownRight className="arrow" />
                        <span className="ed"><b className="abc abce">E</b></span>
                        <span className="sd"><b className="abc abcs">S</b></span>
                        <span className="wd"><b className="abc abcw">W</b></span>
                        <span className="nd"><b className="abc abcn">N</b></span>
                        
                    </div>
                    </div>
                </div>
                <div className="supp">
                    <div className="pex">
                        Humidity
                        <div className=" pex spx">Today humidity</div>
                        <div> {content && content.main.humidity}%</div>
                    </div>
                    <div className="hum"><CiDroplet className="drop" /></div>
                </div>

                <div className="supp">

                    <div className="pex">
                        Pressure
                        <div className=" pex spx">Today pressure</div>
                        <div>{content && content.main.pressure} hpa</div>
                    </div>
                    <div className="baro">
                        <div className="pop"><BsArrowDownRight className="ar" /><div className="cic"></div></div>
                    </div>

                </div>
                <div className="supp">

                    <div className="pex">

                        <div>Temperature</div>
                        <div className="spx pex">Current Temperature</div>
                        <div className="pex">{content && content.main.temp}°</div>
                    </div>
                    <div>
                        <BsThermometerHalf className="ther" />
                        {/* <div>  {content && content.main.temp_min}°</div>
                        <div>  {content && content.main.temp_max}°</div> */}
                    </div>

                </div>
            </div>
            <div className="boxxx"></div>

        </div>



    );
}
export default Main;