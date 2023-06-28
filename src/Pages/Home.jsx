import React from 'react';
import usePageTitle from '../Hooks/usePageTitle';
import styled from 'styled-components';
import fakeData from '../Database/FakeData';
import { STYLEDContainer, STYLEDContainerBox } from '../Styles/genericContainer';
import { STYLEDButton } from '../Styles/genericButton';
import FilterBox from '../Components/Home/FilterBox';
import ProductList from '../Components/Home/ProductList';



function Home() {

  usePageTitle(`E-Redux | Page d'acceuil`);

  return (
    <STYLEDContainer>
      <STYLEDContainerBox>

        <DIV_Home_Container>
          <FilterBox data={fakeData} />
          <ProductList data={fakeData} />
        </DIV_Home_Container>

      </STYLEDContainerBox>
    </STYLEDContainer>
  );
}

export default Home;

const DIV_Home_Container = styled.div`
display: grid;
grid-template-columns: 15% 80%;
grid-template-areas:
    "Filter ProductList";
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