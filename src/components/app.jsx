import React from 'react';
import CityList from '../containers/city_list';
import City from '../containers/city';
import ActiveCity from '../containers/active_city';


const App = () => {
  return (
    <div className="app">
      <CityList className="cities"/>
      <ActiveCity className="active-city"/>
    </div>
  );
};

export default App;
