import { useState,useEffect } from "react";
const useFetch = (url) => {
    const [data,setdata]=useState(null);
useEffect(() => {
   
    // const[city,setCity]=useState('bengaluru')
    
    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error("Could no fetch data")
            }
            return res.json();
        })
        .then(data => {
            console.log(data)
            setdata(data)

        })
        .catch((err) => {
            console.log(err.message);
            console.log("json server not started")
            console.log("please start server by typing")

            console.log(" npx json-server --watch data/db.json --port 8000")
            if (err.name === 'AbortError') {
                console.log("we aborted the fetch")
            }

        })



}, [url])

    return {data};
}
 
export default useFetch;