import React, {useState, useEffect, useRef} from 'react'
import logo from './logo.svg';
import {SearchBar} from './components/SearchBar';
import './App.css';
import axios from 'axios'
let originalList = [];



function App() {

  //useState
const [cities, setCities] = useState([]);
const [restaurants, setRestaurants] = useState([]);

//useEffect

useEffect(()=>{fetchData();
}, []);

  // Functions
  const fetchData = async () => {
    const { data } = await axios.get('http://opentable.herokuapp.com/api/cities');
    setCities(data.cities);
    originalList = [...data.cities];
    console.log(cities)
};
// const fetchData11 = async () => {
//   const { data } = await axios.get('http://opentable.herokuapp.com/api/restaurants');
//   setRestaurants(data.restaurants);
//   originalList = [...data.restaurants];
//   console.log(restaurants)
// };
  
const filterCity = (text) => {
  const filteredList = originalList.filter(item => {
      const userText = text.toLowerCase();
      const cityName = item.toLowerCase();
      
      return cityName.indexOf(userText) > -1;
  });
  setCities(filteredList);
}



  return (
    <div className="App">
     <SearchBar onChangeText={filterCity} />
      <ul>
      {cities.map(item =>{
        return <li>{item}</li>
        
      })}
      
      </ul>
    </div>
  );
}

export default App;
