const fakeData = [
    { id: 1, name: 'Pomme', price: 1.99, type: 'fruit' , img_src: 'https://picsum.photos/id/1/200'},
    { id: 2, name: 'Banane', price: 0.99, type: 'fruit' , img_src: 'https://picsum.photos/id/2/200'},
    { id: 3, name: 'Orange', price: 0.79, type: 'fruit' , img_src: 'https://picsum.photos/id/3/200'},
    { id: 4, name: 'Fraise', price: 2.49, type: 'fruit' , img_src: 'https://picsum.photos/id/4/200'},
    { id: 5, name: 'Myrtille', price: 1.89, type: 'fruit' , img_src: 'https://picsum.photos/id/5/200'},
    { id: 6, name: 'Raisin', price: 3.99, type: 'fruit' , img_src: 'https://picsum.photos/id/6/200'},
    { id: 7, name: 'Pastèque', price: 4.99, type: 'fruit' , img_src: 'https://picsum.photos/id/7/200'},
    { id: 8, name: 'Mangue', price: 2.99, type: 'fruit' , img_src: 'https://picsum.photos/id/8/200'},
    { id: 9, name: 'Ananas', price: 3.49, type: 'fruit' , img_src: 'https://picsum.photos/id/9/200'},
    { id: 10, name: 'Kiwi', price: 1.69, type: 'fruit' , img_src: 'https://picsum.photos/id/10/200'},
    { id: 11, name: 'Carotte', price: 0.69, type: 'légumes' , img_src: 'https://picsum.photos/id/11/200'},
    { id: 12, name: 'Brocoli', price: 1.29, type: 'légumes' , img_src: 'https://picsum.photos/id/12/200'},
    { id: 13, name: 'Tomate', price: 0.99, type: 'légumes' , img_src: 'https://picsum.photos/id/13/200'},
    { id: 14, name: 'Epinard', price: 1.99, type: 'légumes' , img_src: 'https://picsum.photos/id/14/200'},
    { id: 15, name: 'Concombre', price: 0.79, type: 'légumes' , img_src: 'https://picsum.photos/id/15/200'},
    { id: 16, name: 'Pomme de terre', price: 0.89, type: 'légumes' , img_src: 'https://picsum.photos/id/16/200'},
    { id: 17, name: 'Oignon', price: 0.69, type: 'légumes' , img_src: 'https://picsum.photos/id/17/200'},
    { id: 18, name: 'Poivron', price: 0.99, type: 'légumes' , img_src: 'https://picsum.photos/id/18/200'},
    { id: 19, name: 'Laitue', price: 1.49, type: 'légumes' , img_src: 'https://picsum.photos/id/19/200'},
    { id: 20, name: 'Courguette', price: 1.19, type: 'légumes' , img_src: 'https://picsum.photos/id/20/200'},
    { id: 21, name: 'Lait', price: 2.99, type: 'produit frais' , img_src: 'https://picsum.photos/id/21/200'},
    { id: 22, name: 'Yaourt', price: 1.99, type: 'produit frais' , img_src: 'https://picsum.photos/id/22/200'},
    { id: 23, name: 'Fromage', price: 3.49, type: 'produit frais' , img_src: 'https://picsum.photos/id/23/200'},
    { id: 24, name: 'Oeufs', price: 1.79, type: 'produit frais' , img_src: 'https://picsum.photos/id/24/200'},
    { id: 25, name: 'Beurre', price: 2.49, type: 'produit frais' , img_src: 'https://picsum.photos/id/25/200'},
    { id: 26, name: 'Poulet', price: 5.99, type: 'produit frais' , img_src: 'https://picsum.photos/id/26/200'},
    { id: 27, name: 'Poisson', price: 7.99, type: 'produit frais' , img_src: 'https://picsum.photos/id/27/200'},
    { id: 28, name: 'Boeuf', price: 6.99, type: 'produit frais' , img_src: 'https://picsum.photos/id/28/200'},
    { id: 29, name: 'Porc', price: 5.49, type: 'produit frais' , img_src: 'https://picsum.photos/id/29/200'},
    { id: 30, name: 'Crevette', price: 8.99, type: 'produit frais' , img_src: 'https://picsum.photos/id/30/200'},
    { id: 31, name: 'Riz', price: 3.49, type: 'épicerie' , img_src: 'https://picsum.photos/id/31/200'},
    { id: 32, name: 'Pates', price: 2.99, type: 'épicerie' , img_src: 'https://picsum.photos/id/32/200'},
    { id: 33, name: 'Pain', price: 1.99, type: 'épicerie' , img_src: 'https://picsum.photos/id/33/200'},
    { id: 34, name: 'Céréales', price: 4.49, type: 'épicerie' , img_src: 'https://picsum.photos/id/34/200'},
    { id: 35, name: 'Sucre', price: 1.49, type: 'épicerie' , img_src: 'https://picsum.photos/id/35/200'},
    { id: 36, name: 'Sel', price: 0.99, type: 'épicerie' , img_src: 'https://picsum.photos/id/36/200'},
    { id: 37, name: 'Huile d\'olive', price: 5.99, type: 'épicerie' , img_src: 'https://picsum.photos/id/37/200'},
    { id: 38, name: 'Café', price: 3.99, type: 'épicerie' , img_src: 'https://picsum.photos/id/38/200'},
    { id: 39, name: 'Thé', price: 2.49, type: 'épicerie' , img_src: 'https://picsum.photos/id/39/200'},
    { id: 40, name: 'Jus', price: 2.99, type: 'boisson' , img_src: 'https://picsum.photos/id/40/200'},
    { id: 41, name: 'Soda', price: 1.99, type: 'boisson' , img_src: 'https://picsum.photos/id/41/200'},
    { id: 42, name: 'Eau', price: 0.99, type: 'boisson' , img_src: 'https://picsum.photos/id/42/200'},
    { id: 43, name: 'Energy Drink', price: 3.49, type: 'boisson' , img_src: 'https://picsum.photos/id/43/200'},
    { id: 44, name: 'Vin', price: 9.99, type: 'boisson' , img_src: 'https://picsum.photos/id/44/200'},
    { id: 45, name: 'Bière', price: 1.49, type: 'boisson' , img_src: 'https://picsum.photos/id/45/200'},
    { id: 46, name: 'Cocktail', price: 6.99, type: 'boisson' , img_src: 'https://picsum.photos/id/46/200'},
    { id: 47, name: 'Smoothie', price: 4.99, type: 'boisson' , img_src: 'https://picsum.photos/id/47/200'},
    { id: 48, name: 'Thé glacé', price: 2.49, type: 'boisson' , img_src: 'https://picsum.photos/id/48/200'},
];

export default fakeData;
