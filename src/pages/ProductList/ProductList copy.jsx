import { useState } from "react";
import { styled } from "styled-components";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Announcement from "../../components/Announcement/Announcement.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { mobile } from "../../responsive.js";
import { useLocation } from "react-router-dom";
import { shirts } from "../../data.js";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px%", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 40px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [selectedColor, setSelectedColor] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedModel, setSelectedModel] = useState("all");

  const handleColorFilter = (e) => {
    const selectedColor = e.target.value;
    setSelectedColor(selectedColor);
  };

  const handleSizeFilter = (e) => {
    const selectedSize = e.target.value;
    setSelectedSize(selectedSize);
  };

  const handleModelFilter = (e) => {
    const selectedModel = e.target.value;
    setSelectedModel(selectedModel);
  };

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar por color:</FilterText>
          <Select name="color" onChange={handleColorFilter}>
            <Option value="all">Todos los colores</Option>
            <Option value="white">Blanco</Option>
            <Option value="black">Negro</Option>
            <Option value="red">Rojo</Option>
            <Option value="blue">Azul</Option>
            <Option value="yellow">Amarillo</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filtrar por talla:</FilterText>
          <Select name="size" onChange={handleSizeFilter}>
            <Option value="all">Todas las tallas</Option>
            <Option value="xs">XS</Option>
            <Option value="s">S</Option>
            <Option value="m">M</Option>
            <Option value="l">L</Option>
            <Option value="xl">XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filtrar por modelo:</FilterText>
          <Select name="model" onChange={handleModelFilter}>
            <Option value="all">Todos los modelos</Option>
            <Option value="geek">Geek</Option>
            <Option value="keeg">Keeg</Option>
            <Option value="sergys">Sergys</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <FlexContainer>
        {shirts
          .filter(
            (shirt) =>
              (selectedColor === "all" || shirt.color.includes(selectedColor)) &&
              (selectedSize === "all" || shirt.size.includes(selectedSize)) &&
              (selectedModel === "all" || shirt.model === selectedModel)
          )
          .map((shirt) => (
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
