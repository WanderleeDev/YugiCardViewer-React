import axios from "axios";
import { useState, useEffect } from "react";

const APIYG = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'

const [data, setData] = useState([])

useEffect(() => {
  
})

async function getData() {
  try {
    const response  = await axios.get(APIYG)
    setData(response.data)
    console.log(data);
  } catch (error) {
    console.error(`Error al realizar la solicitud: ${error}`);
  }
}

export default getData
