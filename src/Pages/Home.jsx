import React, { useState } from 'react';
import usePageTitle from '../Hooks/usePageTitle';
import styled from 'styled-components';
import fakeData from '../Database/FakeData';
import { STYLEDContainer, STYLEDContainerBox } from '../Styles/genericContainer';
import { STYLEDButton } from '../Styles/genericButton';
import { Link } from 'react-router-dom';

function Home() {
  usePageTitle(`E-Redux | Page d'acceuil`);

  const [selectedType, setSelectedType] = useState(null);
  const types = [...new Set(fakeData.map(item => item.type))];

  const handleCheckboxChange = (type) => {
    if (selectedType === type) {
      setSelectedType(null);
    } else {
      setSelectedType(type);
    }
  };

  const filteredData = selectedType
    ? fakeData.filter(product => product.type === selectedType)
    : fakeData;

  return (
    <STYLEDContainer>
      <STYLEDContainerBox>
        <DIV_Home_Container>
          <div>
            <h2>Catégories:</h2>
            <div>
              <input
                type="radio"
                id="all"
                checked={!selectedType}
                onChange={() => setSelectedType(null)}
              />
              <label htmlFor="all">Tous</label>
            </div>
            {types.map(type => (
              <div key={type}>
                <input
                  type="checkbox"
                  id={type}
                  checked={selectedType === type}
                  onChange={() => handleCheckboxChange(type)}
                />
                <label htmlFor={type}>{type.charAt(0).toLocaleUpperCase() + type.slice(1)}</label>
              </div>
            ))}
          </div>

          <DIV_Card_Container>
            {filteredData.map(product => (
              <Card key={product.name}>
                <DIV_Card_img>
                  <img src={product.img_src} alt={product.name} className="card-img" />
                </DIV_Card_img>
                <DIV_Card_body>
                  {product.name}€{product.price}/pièce
                </DIV_Card_body>
                <Link to={`/produit/${product.id}`}>
                  <STYLEDButton>Voir produit</STYLEDButton>
                </Link>
              </Card>
            ))}
          </DIV_Card_Container>
        </DIV_Home_Container>
      </STYLEDContainerBox>
    </STYLEDContainer>
  );
}

export default Home;

const DIV_Home_Container = styled.div`
  display: grid;
  grid-template-columns: 15% 80%;
  grid-template-areas: "Filter ProductList";
  grid-gap: 20px;
  margin: 20px;
  min-height: 250px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  padding: 2%;
`;

const DIV_Card_Container = styled.div`
  width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    margin: 20px;
    min-height: 250px;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    padding: 2%;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.05) 0 6px 245px, rgba(0, 0, 0, 0.08) 0 0 0 2px;
`;

const DIV_Card_img = styled.div`
  .card-img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    transition: transform 0.3s ease;    
    &:hover {
      transform: scale(1.7);
    }
  }
`;

const DIV_Card_body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;