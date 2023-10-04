import React, { useState } from 'react';

const CityTabs = (props) => {
  const cities = ['New York', 'Mumbai', 'Paris', 'London'];

  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState(cities[0]);

  // Function to handle tab clicks
  const handleTabClick = (city) => {
    setActiveTab(city);
    props.setActiveTab(city);
  };

  return (
    <div className="tabs">
      {cities.map((city) => (
        <div
          key={city}
          style={{
            backgroundColor: activeTab === city ? 'blue' : '', // Set background color for the active tab
            color: activeTab === city ? 'white' : '', // Set text color for the active tab
          }}
          className='city-tab'
          onClick={() => handleTabClick(city)}
        >
          {city}
        </div>
      ))}
    </div>
  );
};

export default CityTabs;
