import React, { useState } from "react";
import { Link } from "react-router-dom";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import SingleBedOutlinedIcon from "@mui/icons-material/SingleBedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import OpenWithOutlinedIcon from "@mui/icons-material/OpenWithOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
const PropertyCard = ({ property }) => {
  const [heart, setheart] = useState(true)
  return (
    <div className="card">
      {/* Display property information */}
      <div className="hotel-image">
        <img
          src={`https://source.unsplash.com/random/?${property.city}`}
          alt="image"
        />
        {/* <img src={property.image}/> */}
        <div className="heart-rent">
          <button className="rent">For Rent</button>
          <div className="heart-container" onClick={()=>setheart(!heart)}>
            {heart?<FavoriteBorderOutlinedIcon className="heart" />:<FavoriteOutlinedIcon className="heart"/>}
          </div>
        </div>
      </div>
      <div className="details">
        <div className="location">
          <LocationOnOutlinedIcon className="location-icon"/>
          <span className="location-number">{Math.floor(Math.random() * 500 + 8000)}</span>
        </div>
        <h3>
          {property.name} - <span>{property.address}</span>
        </h3>
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
            <span className="price">{property.price}</span>
            <span className="per-month">/month</span>
          </div>
          <div className="read-more-div">
          <Link to={`/property/${property.city}/${property.id}`}>
            <button className="read-more">Read More</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
