import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";

// Import the JSON data
import data from "../data.json";

const PropertyList = ({ activeTab }) => {
  const properties = data[activeTab] || data["New York"];

  // Use state to track the number of cards to display
  const [displayCount, setDisplayCount] = useState(6);
  const [word, setWord] = useState(true);

  // Slice the properties array based on the displayCount
  const displayedProperties = properties.slice(0, displayCount);

  // Function to load more cards
  const loadMore = () => {
    word ? setDisplayCount(displayCount + 6) : setDisplayCount(6); // Increase the display count by 6
    setWord(!word);
  };

  return (
    <div className="list-container">
      <div className="list">
        {displayedProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <button className="show" onClick={loadMore}>
        <span className="show-more">
          <span className="hour-glass">
            <HourglassTopOutlinedIcon className="hour" />
          </span>
          <span>
          Show {word ? "More" : "Less"}
          </span>
        </span>
      </button>
    </div>
  );
};

export default PropertyList;
