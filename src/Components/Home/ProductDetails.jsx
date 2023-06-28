import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { STYLEDContainer, STYLEDContainerBox } from '../../Styles/genericContainer';
import fakeData from '../../Database/FakeData';
import { styled } from 'styled-components';
import { STYLEDButton } from '../../Styles/genericButton';
import { FaCartPlus } from "react-icons/fa";
import { toast } from 'react-toastify';
import { STYLEDInput } from '../../Styles/genericInput';
import { CartContext } from '../../Contexts/CartContext';

function ProductDetails() {

    const { addToCart } = useContext(CartContext);

    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const product = fakeData.find(item => item.id === parseInt(id));
        setSelectedProduct(product);
        document.title = `E-Redux | Consultation de : ${product?.name}`;
    }, [id]);

    const handleAddToCart = () => {
        console.log(`Produit ajouté au panier : ${selectedProduct?.id} - Quantité : ${quantity}`);
        toast.success(`${selectedProduct?.name} (${quantity} unités) ajouté au panier.`);
        addToCart(selectedProduct, quantity);
    }

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
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
                    <h2 htmlFor="quantity">Quantité :</h2>
                    <div className="quantity-container">
                        <div className="quantity-input">
                            <STYLEDButton onClick={decrementQuantity}>-</STYLEDButton>
                            <STYLEDInput
                                type="number"
                                id="quantity"
                                value={quantity}
                                min={1}
                                max={100}
                                step={1}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                            />
                            <STYLEDButton onClick={incrementQuantity}>+</STYLEDButton>
                        </div>
                    </div>
                    <STYLEDButton onClick={handleAddToCart} width="50%" height="100px">
                        <FaCartPlus /> Ajouter au panier <FaCartPlus />
                    </STYLEDButton>
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
gap: 2%;

.img {
width: 50%;
height: auto;
object-fit: cover;
}

.quantity-container {
display: flex;
align-items: center;
}

.quantity-input {
display: flex;
align-items: center;
gap: 10px;
}
`;