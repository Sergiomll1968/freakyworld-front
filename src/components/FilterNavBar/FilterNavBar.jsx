import { styled } from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FilterLabel = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: gray;
  transition: color 0.3s, text-decoration 0.3s;
`;

const Dropdown = styled.select`
  font-size: 14px;
  margin-left: 10px;
  padding: 5px;
  border: 1px solid lightgray;
  border radius: 3px;
  color: gray;
  `;

const FilterNavBar = () => {
  return (
    <>
    <FilterContainer>
            <FilterLabel>Color:</FilterLabel>
            <Dropdown>
              <option value="Blanco" style={{ backgroundColor: "#F7F9F9" }}></option>
              <option value="Azul" style={{ backgroundColor: "#AED6F1" }}></option>
              <option value="Rosa" style={{ backgroundColor: "#F5B7B1" }}></option>
              <option value="Rojo" style={{ backgroundColor: "#E74C3C" }}></option>
              <option value="Verde" style={{ backgroundColor: "#58D68D" }}></option>
              <option value="Amarillo" style={{ backgroundColor: "#F4D03F" }}></option>
              <option value="Negro" style={{ backgroundColor: "#273746" }}></option>
            </Dropdown>
          </FilterContainer>

          <FilterContainer>
            <FilterLabel>Temporada:</FilterLabel>
            <Dropdown>
              <option value="Verano">Verano</option>
              <option value="Invierno">Invierno</option>
              <option value="Novedades">Novedades</option>
            </Dropdown>
          </FilterContainer>

          <FilterContainer>
            <FilterLabel>Tipo:</FilterLabel>
            <Dropdown>
              <option value="Camiseta">Camiseta</option>
              <option value="Camisa">Sudadera</option>
            </Dropdown>
          </FilterContainer>

    </>
  )
}

export default FilterNavBar;

