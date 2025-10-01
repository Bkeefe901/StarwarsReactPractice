import { useState, useEffect } from "react";
import axios from "axios";
import Planet from "../components/Planet";


export default function Planets() {
  const [data, setData] = useState(null);

  let urlStr = "https://swapi.info/api/planets";

  async function getData(urlStr){
    try {
      let res = await axios.get(urlStr);

      res.data.length = 10;

      setData(res.data);
      
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(()=>{
    getData(urlStr);
    console.log
  }, []);

  let loading = () => {
      return <h1>Loading</h1>
  }

  let loaded = () => data.map((plan, i) => {
      return <Planet key={i} {...plan} />
    })
  



  return data ? <div className="container" >{loaded()}</div> : loading();
}