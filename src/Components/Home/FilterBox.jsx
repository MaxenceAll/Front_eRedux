import React from 'react'

function FilterBox({ data }) {
    // Get all unique types from the data
    const types = [...new Set(data.map(item => item.type))];
  
    return (
      <div>
        <h2>Catégories:</h2>
        {types.map(type => (
          <div key={type}>
            <input type="checkbox" id={type} />
            <label htmlFor={type}>{type}</label>
          </div>
        ))}
      </div>
    );
  }
  
  export default FilterBox;