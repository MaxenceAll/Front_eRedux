import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import fruitsImage from '../assets/background/fruits.jpg'

export default function MainLayout() {
  return (
    <DIV_AppContainer>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <FOOTER_Container>
        <Footer />
      </FOOTER_Container>
    </DIV_AppContainer>
  );
}

const DIV_AppContainer = styled.div`
  min-width: 100dvw;
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  background-image: url(${fruitsImage}); /* Set the imported image as the background */
  background-size: contain; /* Adjust the background size to cover the container */
`;


const FOOTER_Container = styled.footer`
  margin-top: auto;
`;
