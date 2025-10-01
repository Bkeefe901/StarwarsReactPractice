import { useState, useEffect } from "react";
import axios from "axios";
import Ship from "../components/Ship";


export default function Starships() {
  const [data, setData] = useState(null);

   let urlStr = "https://swapi.info/api/starships";

   async function getData(urlStr){
    try {
      let res = await axios(urlStr);
      res.data.length = 10;
      setData(res.data);
    } catch (err) {
      console.error(err.message);
    }
   }

   useEffect(()=>{
    getData(urlStr)
   }, []);

   let loading = () => {
    return <h1>Loading</h1>
   }

   let loaded = () => data.map((ship, i) => {
    return <Ship key={i} {...ship} />
   })


  return data? <div className="container">{loaded()}</div> : loading();
}