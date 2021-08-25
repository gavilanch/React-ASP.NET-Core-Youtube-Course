import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import './App.css';
import {urlWeather} from './endpoints';

function App() {

  useEffect(() => {
    axios.get(urlWeather)
      .then((response: AxiosResponse<any>) => {
        console.log(response.data);
      })
  }, [])

  return (
    <>
      <h1>
        My React app
      </h1>
      <p>Communicating with ASP.NET Core</p>
    </>

  );
}

export default App;
