import React, { useEffect, useState } from 'react'

import '../style.css';
import axios from 'axios';
const Weather = () => {

const [city,setCity]=useState();
const [weather,setWeather]=useState('');
const [tableweather,setTableWeather]=useState('');
const API_KEY = 'ac5ab872b9d6035b756de8f90ecac1d0';
const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
const DAPI = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`;
    useEffect(() => {
      if (!city) {
        axios.get(DAPI)
          .then((res) => {
            console.log(res.data);
            setWeather(res.data);
            setTableWeather(res.data);
          })
          .catch((error) => {
            console.error('API Error:', error);
          });
      }
    },[])


const searchCity=(e)=>{
e.preventDefault();
 
axios.get(API,()=>{



}).then((res)=>{

  console.log(res.data);
  setWeather(res.data);

}).catch((e)=>{


  console.log("not found");
})


}

  return (
    <>
    <div className='container-fluid d-flex justify-content-center vi'>

<div className="container mt-5">   <h1 className='text-info mb-5'>Welcome to Weather App</h1>
<h3 className='text-success'>Providing the facility to search weather of your city</h3>
<p className='text-white'>Search Weather Easily</p>
<div className="row text-center">

        <div className="col-md-6 offset-3">
<form  onSubmit={searchCity} >
          <div className="form-group">
            <input type="text" className="form-control" value={city} id="exampleInput" placeholder="Enter city e:g London" onChange={(e)=>setCity(e.target.value)}  />
          </div>

  <div className="col-md-3">
          <button className='btn btn-danger' type='submit'> <i className="fas fa-search"></i> </button>
        </div>
</form>

        </div>

      
      </div>

{weather&&(
<div className='container text-white'>
  <h1 className='text-white'>{weather.name} <span>{weather.main.temp}<sup>o</sup>C</span></h1>
<h3>{weather.cloud}</h3>
<h4>{weather.weather[0].main}</h4>
<h4>Cloudiness:{weather.clouds.all}%</h4>
</div>
)}

{weather&&(

<div className='container text-white'>

<table className="table table-hover text-warning table-responsive-md">
    <thead className="thead-light text-info">
      <tr className='text-info'>
        <th scope="col">City</th>
        <th scope="col">Humidity</th>
        <th scope="col">Visibility</th>
        <th scope="col">Pressure</th>
        <th scope="col">Wind speed</th>
        <th scope="col">Description</th>
        <th scope="col">Feels like</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">{weather.name}</th>
        <td>{weather.main.humidity}%</td>
        <td>{weather.visibility}m</td>
        <td>{weather.main.pressure}hPa</td>
        <td>{weather.wind.speed}m/s</td>
        <td>{weather.weather[0].description}</td>
        <td>{weather.main.feels_like}<sup>o</sup>C</td>
      </tr>
  
  
   
    </tbody>
  </table>


</div>

)}


    


  




<p className='text-white text-center'>Developed By : Obaid</p>


</div>














    </div>
 
{/*  */}

    </>
  )
}

export default Weather