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
import useFetch from "./useFetch";



const Main = (props) => {
    const items = props.items;
    const [city, setCity] = useState('');
    // console.log(items," is prop item")



    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bbff79c48d5f5275d125ff06e7347d5c`
    const { data: content } = useFetch(url)

    const windAngle = content && content.wind.deg
    // const windAngle= 180;
    const deg = windAngle - 135;
    const actualangle = deg + "deg";

    const r = document.querySelector(':root')
    useEffect(() => {
        setCity(items);
    }, [items]);


    // r.style.setProperty("--comapss-arrowAngle", `${actualangle}`)
    const atmpress = content && content.main.pressure
    const pressdeg = (((atmpress - 870) / 360) * 360) + 90
    const atmpressdeg = pressdeg + "deg"
    r.style.setProperty("--baro-anima", `${atmpressdeg}`)
    const sunrisetime = content && content.sys.sunrise
    const sunsettime = content && content.sys.sunset
    const currtime = content && content.dt
    const sundeg = ((currtime - sunrisetime) / (sunsettime - sunrisetime)) * 180;
    const sundegstr = sundeg + "deg"
    if (sundeg >= 180) {
        r.style.setProperty("--progress", "#0081FF")
        r.style.setProperty("--circleroto", "90deg")
        r.style.setProperty("--horizonroto", "-90deg")
        const a = sundeg - 179;
        const b = a + "deg"
        r.style.setProperty("--sun-angle", `${b}`)
    }
    else {
        r.style.setProperty("--progress", "#dca84e")
        r.style.setProperty("--circleroto", "-90deg")
        r.style.setProperty("--horizonroto", "90deg")
        r.style.setProperty("--sun-angle", `${sundegstr}`)
    }
    const humid = 100 - (content && content.main.humidity);
    const droplet = humid + "%"
    r.style.setProperty("--humid", `${droplet}`)

    const actualtemp = content && content.main.temp
    const tempper = ((actualtemp / 80) * 100);
    const tempstr = tempper + '%'
    r.style.setProperty("--templiq", `${tempstr}`)
    const winddeg=(content && content.wind.deg)+225
    // const winddeg=90+225
    const windstr=winddeg+"deg"
    r.style.setProperty("--comapss-arrowAngle",`${windstr}`)





    function bgimage(icon) {
        const sunsettime = content && content.sys.sunset
        const currtime = content && content.dt
        const a=document.querySelector('.info')
        const b=document.querySelector('.whole')
        if (currtime > sunsettime) {
            b.style.setProperty("color","#ffffff")
            if (icon === "01n") {
                let image='https://media.istockphoto.com/id/826672506/photo/night-sky-with-stars.jpg?s=612x612&w=0&k=20&c=lPeDcgxVYmPQrWcuXQuT-bCsL28ZKWCMwO3A8IrmvRo='
                a.style.setProperty('background',`url('${image}') center center/cover no-repeat`)
            }
            else if (icon === "02n") {
                let image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uD2y1N235a9bPnX3A2RU80ibgi1yzZtpLg&usqp=CAU'
                a.style.setProperty('background',`url('${image}') center center/cover no-repeat`)
            } else if (icon === "03n") {
                let image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Kult5vKkihr2tQr0fOIhVC_AYJ_ymOzx5A&usqp=CAU'
                a.style.setProperty('background',`url('${image}') center center/cover no-repeat`)
            } else if (icon === "04n") {
                let image='https://img.freepik.com/free-photo/amazing-beautiful-sky-with-clouds_58702-1653.jpg'
                a.style.setProperty('background',`url('${image}') center center/cover no-repeat`)
            } else if (icon === "09n") {
                let image='https://media.istockphoto.com/id/482380380/photo/background-rain.jpg?s=170667a&w=0&k=20&c=NYeZqb5n8ifXfHVmsaJh4FwZBIV4O_8KnUomnH4ykfc='
                a.style.setProperty('background',`url('${image}') center center/cover no-repeat`)
            } else if (icon === "10n") {
                let image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uD2y1N235a9bPnX3A2RU80ibgi1yzZtpLg&usqp=CAU'
                a.style.setProperty('background',`url('${image}') center center/cover no-repeat`)
            } else if (icon === "11n") {
                let image='https://c4.wallpaperflare.com/wallpaper/443/471/729/storm-lightning-skies-cloudy-wallpaper-preview.jpg'
                a.style.setProperty('background',`url('${image}') center center/cover no-repeat`)
            } else if (icon === "13n") {
                let image='https://media.istockphoto.com/id/1190059388/vector/white-splash-on-blue-background-forest-during-a-snow-storm-at-night-christmas-tree.jpg?s=612x612&w=0&k=20&c=6ihDcTPbePYGPhRWt458eQPKvC8kWn2Dv4BR2lTdZTI='
                a.style.setProperty('background',`url('${image}') center center/cover no-repeat`)
            } else {
                let image='https://e0.pxfuel.com/wallpapers/602/716/desktop-wallpaper-foggy-weather-road-foggy-tree.jpg'
                a.style.setProperty('background',`url('${image}') center center/cover no-repeat`)
            }
        } else {
            b.style.setProperty("color","#000000")
            if (icon === "01d") {
                let image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYbMT3fksOykq9KnrZUCP2Wj41OydF3pMQ9qXCm_V&s'
                a.style.setProperty('background',`url('${image}') center center/cover no-repeat`)
            }
            else if (icon === "02d") {
                let image='https://static4.depositphotos.com/1005376/324/i/600/depositphotos_3249185-stock-photo-sky.jpg'
                a.style.setProperty('background',`url('${image}') center center/cover no-repeat`)
            } else if (icon === "03d") {
                let image='https://media.istockphoto.com/id/904784522/photo/dramatic-sky.jpg?s=612x612&w=0&k=20&c=x1pQSsaiwutj-l-cRrr87D206J65TjJ8cxNC2YzkI2k='
                a.style.setProperty('background',`url('${image}') center center/cover no-repeat`)
            } else if (icon === "04d") {
                let image='https://img.freepik.com/free-photo/black-rain-abstract-dark-power_1127-2380.jpg'
                a.style.setProperty('background',`url('${image}') center center/cover no-repeat`)
            } else if (icon === "09d") {
                let image='https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?b=1&s=612x612&w=0&k=20&c=oV1VD-yJvo0OCtNaLVOR_MWX67zkLcyIx-pz7M7hedk='
                a.style.setProperty('background',`url('${image}') center center/cover no-repeat`)
            } else if (icon === "10d") {
                let image='https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?b=1&s=612x612&w=0&k=20&c=oV1VD-yJvo0OCtNaLVOR_MWX67zkLcyIx-pz7M7hedk='
                a.style.setProperty('background',`url('${image}') center center/cover no-repeat`)
            } else if (icon === "11d") {
                let image='https://img.freepik.com/premium-photo/thunderstorm-clouds-with-lightning-day_739292-5812.jpg'
                a.style.setProperty('background',`url('${image}') center center/cover no-repeat`)
            } else if (icon === "13d") {
                let image='https://media.istockphoto.com/id/614332492/photo/snow-storm.jpg?s=612x612&w=0&k=20&c=UT779vnlT6q5tRGHR_JbweEC8L0tHbXMeogrAqJeQSo='
                a.style.setProperty('background',`url('${image}') center center/cover no-repeat`)
            } else {
                let image='https://media.istockphoto.com/id/1067955260/photo/misty-mountains.jpg?s=612x612&w=0&k=20&c=EPfkXyKIf0i28qtYuX-SDwFReSLnOViEIKL98YttU0s='
                a.style.setProperty('background',`url('${image}') center center/cover no-repeat`)
            }

        }
       
    }





    function unixtoreal(timestamp) {
        const tz = content && content.timezone
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
        <div className="main" data-testid="main-1">

            <div className="cardcont">
                <div className="info" style={{
                    // backgroundImage: `URL(${background})`

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
                                    {bgimage(cont.icon)}
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
                    {/* <div className="hum"><CiDroplet className="drop" > </CiDroplet></div> */}
                    <div className="hum"><div className="drop">
                        <div className="drop1">
                            <div className="liquid">
                            </div>
                        </div>
                    </div>
                    </div>
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
                    <div className="thermocontainer">
                        {/* <BsThermometerHalf className="ther" /> */}
                        {/* <div className="thermometer"> */}
                        <div className="therrr">
                            <div className="bar"></div>
                            <div className="bott"></div>
                        </div>
                        {/* </div> */}
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