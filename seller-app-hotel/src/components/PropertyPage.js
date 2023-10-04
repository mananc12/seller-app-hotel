import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import SingleBedOutlinedIcon from "@mui/icons-material/SingleBedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import OpenWithOutlinedIcon from "@mui/icons-material/OpenWithOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const PropertyPage = () => {
  // Get the parameter from the URL (property name)
  const { cityName, propertyId } = useParams();
  console.log(cityName, propertyId);

  // Find the selected property by city and propertyId
  const selectedProperty = data[cityName].find(
    (property) => property.id === parseInt(propertyId)
  );

  // Check if the property exists
  if (!selectedProperty) {
    return <div>Property not found</div>;
  }

  const { name, description, price, address } = selectedProperty;

  return (
    <div className="property-page">
      <div className="pp-hotel-image">
        <img
          src={`https://source.unsplash.com/random/?${cityName}`}
          alt="image"
        />
        
      </div>
      <div className="pp-details">
      <span className="propertypage-rent">For Rent</span>
        <div className="location">
          <LocationOnOutlinedIcon className="location-icon" />
          <span className="location-number">
            {Math.floor(Math.random() * 500 + 8000)}
          </span>
        </div>
        <h3>
          {name} - <span>{address}</span>
        </h3>
        <p>{description}</p>
        {/* <p>{property.description}</p> */}

        <div className="specifications-container">
          <div className="specifications">
            <DomainOutlinedIcon />
            {Math.floor(Math.random() * 3 + 1)} Rooms
          </div>
          <div className="specifications">
            <SingleBedOutlinedIcon />
            {Math.floor(Math.random() * 2 + 1)} Bed
          </div>
          <div className="specifications">
            <BathtubOutlinedIcon />
            {Math.floor(Math.random() * 2 + 1)} Bath
          </div>
          <div className="specifications">
            <OpenWithOutlinedIcon />
            {Math.floor(Math.random() * 1000 + 100)} sft
          </div>
        </div>

        {/* Link to the property details page */}
        <div className="price-read-more">
          <div className="price-per-month">
            <span className="price">{price}</span>
            <span className="per-month">/month</span>
          </div>
        </div>
        <button
          onClick={() => alert("Booking functionality can be added here")}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PropertyPage;
