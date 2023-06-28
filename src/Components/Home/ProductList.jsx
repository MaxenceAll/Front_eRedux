import React from 'react'
import { STYLEDContainer, STYLEDContainerBox } from '../../Styles/genericContainer';
import { styled } from 'styled-components';
import { STYLEDButton } from '../../Styles/genericButton';
import { Link } from 'react-router-dom';

function ProductList({ data }) {
    console.log(data);
    return (
        <DIV_Card_Container>
            {data.map(product => (
                <Card key={product.name}>
                    <DIV_Card_img>
                        <img src={product.img_src} alt={product.name} className="card-img" />
                    </DIV_Card_img>
                    <DIV_Card_body>
                        <p><b>{product.name}</b> €{product.price}/pièce</p>
                    </DIV_Card_body>
                    <Link to={`/produit/${product.id}`}>
                        <STYLEDButton>Voir produit</STYLEDButton>
                    </Link>
                </Card>
            ))}
        </DIV_Card_Container>
    )
}

export default ProductList

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
    width: 50px;
    height: 50px;
    object-fit: cover;
    transition: transform 0.3s ease;    
    &:hover {
      transform: scale(1.7);
    }
  }
`;

const DIV_Card_body = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;