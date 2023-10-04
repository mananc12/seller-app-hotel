import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CityTabs from './components/CityTabs';
import PropertyList from './components/PropertyList';
import PropertyPage from './components/PropertyPage';

function App() {
  const [activeTab, setActiveTab] = useState('City 1');
  const location = useLocation();

  // Function to determine whether to render CityTabs
  const shouldRenderCityTabs = location.pathname === '/';

  return (
    <div className="App">
      <div className='container'>
        {shouldRenderCityTabs && <CityTabs setActiveTab={setActiveTab} activeTab={activeTab} />}
        <Routes>
          <Route path='/property/:cityName/:propertyId' element={<PropertyPage />} />
          <Route path='/' element={<PropertyList activeTab={activeTab} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
