import { useEffect, useState } from "react";
import axios from "axios";

  const useFetch = () => {

    const [data, setData] = useState([])
  
    useEffect(() => {
      const axiosData = async () => {
        try {
          const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?race=Wyrm')
          setData(response.data.data)
        } catch (error) {
          console.log(error);
        }
      }
      axiosData()
    }, [])

    return {data}
  }

  export default useFetch


