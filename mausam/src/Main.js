import { useEffect, useState } from "react";
import background from "./clearskyday.jpg";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineDeviceThermostat, MdOutlineWaterDrop } from "react-icons/md";
import { WiSunrise, WiSunset } from "react-icons/wi";
import { BiWind } from "react-icons/bi";
import { FaSun } from "react-icons/fa";
import { BsArrowDownRight } from "react-icons/bs";
import { CiDroplet } from "react-icons/ci";
import { BsThermometerHalf } from "react-icons/bs";



const Main = () => {
    const [content, setContent] = useState(null);
    const city = "bengaluru"
    useEffect(() => {


        const url = 'https://api.openweathermap.org/data/2.5/weather?q=bengaluru&units=metric&appid=bbff79c48d5f5275d125ff06e7347d5c'
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Could no fetch data")
                }
                return res.json();
            })
            .then(data => {
                console.log(data)
                setContent(data)

            })
            .catch((err) => {
                console.log(err.message);
                console.log("json server not started")
                console.log("please start server by typing")

                console.log(" npx json-server --watch data/db.json --port 8000")
                if (err.name === 'AbortError') {
                    console.log("we ablorted the fetch")
                }

            })



    }, [])


    return (
        <div className="main">

            <div className="cardcont">
                <div className="info" style={{
                    backgroundImage: `URL(${background})`

                }}>


                    <div className="whole" >

                        <div className="locatime">
                            <div className="loca"><HiLocationMarker /> {content && content.name}  </div>

                            <div className="time">Today {content && content.timezone}PM</div>
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

                            <div> <BiWind />  {content && content.wind.speed}km/h</div>
                        </div>


                    </div>

                    <div className="sunriseset">

                        <div className="circle">
                            <div className="innercic">

                                <div className="timecont">

                                    <div className="sun"> <div className="san rise"><WiSunrise /></div><div className="indi">Sunrise</div><div className="tex">6:00 AM</div></div>

                                    <div id="horizon">Horizon</div>

                                    <div className="sanogolo">
                                        <FaSun id="suryarachandrama" />

                                    </div>
                                    <div className="sun moon"> <div className="san set"><WiSunset /></div><div className="tex"><div className="indi">Sunset</div>6:00 PM</div></div>
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
                        <div> {content && content.wind.speed} km/h</div>
                    </div>
                    <div> <div id="compass">
                        <BsArrowDownRight className="arrow" />
                        <span className="ed"><b className="abc abce">E</b></span>
                        <span className="sd"><b className="abc abcs">S</b></span>
                        <span className="wd"><b className="abc abcw">W</b></span>
                        <span className="nd"><b className="abc abcn">N</b></span>
                        {/* {content && content.wind.deg} */}
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
                        <div className="pop"><BsArrowDownRight className="ar" /><div class="cic"></div></div>
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