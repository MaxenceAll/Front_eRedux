import React, { useState } from 'react';

function FilterBox({ data, onTypeSelect }) {
  
  const [selectedType, setSelectedType] = useState(null);
  const types = [...new Set(data.map(item => item.type))];

  function handleTypeSelection(type) {
    if (selectedType === type) {
      setSelectedType(null);
    } else {
      setSelectedType(type);
    }
    onTypeSelect(type);
  }

  function handleRemoveAllFilters() {
    setSelectedType(null);
    onTypeSelect(null);
  }

  return (
    <div>
      <h2>Catégories:</h2>
      <div>
        <input
          type="checkbox"
          id="all"
          checked={selectedType === null}
          onChange={handleRemoveAllFilters}
        />
        <label htmlFor="all">Tous</label>
      </div>
      {types.map(type => (
        <div key={type}>
          <input
            type="checkbox"
            id={type}
            checked={selectedType === type}
            onChange={() => handleTypeSelection(type)}
          />
          <label htmlFor={type}>{type}</label>
        </div>
      ))}
    </div>
  );
}

export default FilterBox;
