import { useState } from "react";
import { styled } from "styled-components";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Announcement from "../../components/Announcement/Announcement.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { mobile } from "../../responsive.js";
import { useLocation } from "react-router-dom";
import { shirts } from "../../data.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Establece una altura mínima para el contenedor para que ocupe al menos toda la altura de la pantalla */
`;

const Title = styled.h1`
  margin: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
  flex: 1; /* Asegura que este contenedor ocupe todo el espacio restante en la columna */
`;

const FlexItem = styled.div`
  text-align: center;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Title>{cat}</Title>
      <FlexContainer>
        {shirts.map((shirt) => (
          <FlexItem key={shirt.id}>
            <Img src={shirt.img} alt={`Camiseta ${shirt.id}`} />
          </FlexItem>
        ))}
      </FlexContainer>
      <Footer />
    </Container>
  );
};

export default ProductList;
