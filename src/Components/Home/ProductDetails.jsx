import React, { useEffect, useState } from 'react';
import usePageTitle from '../../Hooks/usePageTitle';
import { useParams } from 'react-router-dom';
import { STYLEDContainer, STYLEDContainerBox } from '../../Styles/genericContainer';
import fakeData from '../../Database/FakeData';
import { styled } from 'styled-components';
import { STYLEDButton } from '../../Styles/genericButton';
import { FaCartPlus } from "react-icons/fa6";
import { toast } from 'react-toastify';

function ProductDetails() {
    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState(null);
    useEffect(() => {
        const product = fakeData.find(item => item.id === parseInt(id));
        setSelectedProduct(product);
        document.title = `E-Redux | Consultation de : ${product?.name}`;
    }, [id]);

    const handleAddToCart = () => {
        console.log(`Produit ajouté au panier : ${selectedProduct?.id}`);
        toast.success(`${selectedProduct?.name} ajouté au panier.`);
    }

    return (
        <STYLEDContainer>
            <STYLEDContainerBox>
                <DIV_ProductDetails_Container>
                    <img className="img" src={selectedProduct?.img_src} alt={selectedProduct?.name} />
                    <h2><b>Nom du produit:</b> {selectedProduct?.name}</h2>
                    <p><b>Prix du produit:</b> {selectedProduct?.price}€/unité</p>
                    <p><b>Type du produit:</b> {selectedProduct?.type}</p>
                    <p><b>Identifiant du produit :</b> {selectedProduct?.id}</p>
                    <STYLEDButton onClick={()=> handleAddToCart()} width="50%" height="100px"> <FaCartPlus /> Ajouter au panier <FaCartPlus /> </STYLEDButton>
                </DIV_ProductDetails_Container>
            </STYLEDContainerBox>
        </STYLEDContainer>
    );
}

export default ProductDetails;

const DIV_ProductDetails_Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: left;
margin: 20px;
min-height: 250px;
gap:2%;
.img {
        width: 50%; 
        height: auto;
        object-fit: cover; 
    }
`;