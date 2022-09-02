import {useState, useEffect} from 'react';
import useFetch from "react-fetch-hook";
import DevsData from './TempRandData';

function DevoftheWeek() {
  const url = "https://randomuser.me/api"
  const {isLoading, data, error} = useFetch(url + "?results=8")
  const [devInfo, setDevInfo] = useState(null)

  useEffect(()=>{
    setDevInfo(data?.results)
  }, [data])
  return (
    <div>
      {isLoading && (
      <h1>Loading...</h1>
      )}
      {error && (
      <h1>Oop!<br/>Unable to fetch the contact lists, try again</h1>
      )}
      <DevsData devs_list={devInfo} />
    </div>
  )
}

export default DevoftheWeek;
