import { useState, useRef, useEffect } from 'react';
import { styled } from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  
`;

const FilterLabel = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: grey;
  transition: color 0.3s, text-decoration 0.3s;

  &:hover {
    color: black;
    background-color: #red;
    width: 100%;
    height: 100%;
    // box-shadow: 0 4px 8px rgba(0.3, 0.3, 0.3, 0.3);
  }
`;

const FilterOptionsContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #fff;
  z-index: 1;
  top: 100%;
  left: 7%;
  animation: slideDown 0.3s ease;
  transform-origin: top;
  min-width: 5px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 10px 0;

  @keyframes slideDown {
    from {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }
`;

const FilterOption = styled.label`
  display: flex;
  // justify-content: space-between;
  text-align: left;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  padding: 5px 5px;
  margin-right: 5px;
`;

const FilterCheckbox = styled.input`
  margin-left: 5px;
  margin-right: 5px;
  order: -1;
`;

const ColorSwatch = styled.span`
  width: 15px;
  height: 15px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: inline-block;
  margin-right: 5px;
  
  
`;

const FilterNavBar = () => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSeasons, setSelectedSeasons] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [colorOptionsVisible, setColorOptionsVisible] = useState(false);
  const [seasonOptionsVisible, setSeasonOptionsVisible] = useState(false);
  const [typeOptionsVisible, setTypeOptionsVisible] = useState(false);
  const [sizeOptionsVisible, setSizeOptionsVisible] = useState(false);
  const containerRef = useRef(null);

  const handleColorChange = (event) => {
    const { value } = event.target;
    if (selectedColors.includes(value)) {
      setSelectedColors(selectedColors.filter((color) => color !== value));
    } else {
      setSelectedColors([...selectedColors, value]);
    }
  };

  const handleSeasonChange = (event) => {
    const { value } = event.target;
    if (selectedSeasons.includes(value)) {
      setSelectedSeasons(selectedSeasons.filter((season) => season !== value));
    } else {
      setSelectedSeasons([...selectedSeasons, value]);
    }
  };

  const handleTypeChange = (event) => {
    const { value } = event.target;
    if (selectedTypes.includes(value)) {
      setSelectedTypes(selectedTypes.filter((type) => type !== value));
    } else {
      setSelectedTypes([...selectedTypes, value]);
    }
  };

  const handleSizeChange = (event) => {
    const { value } = event.target;
    if (selectedSizes.includes(value)) {
      setSelectedSizes(selectedSizes.filter((size) => size !== value));
    } else {
      setSelectedSizes([...selectedSizes, value]);
    }
  };

  const toggleOptions = (option) => {
    if (option === 'color') {
      setColorOptionsVisible(!colorOptionsVisible);
      setSeasonOptionsVisible(false);
      setTypeOptionsVisible(false);
      setSizeOptionsVisible(false);
    } else if (option === 'season') {
      setSeasonOptionsVisible(!seasonOptionsVisible);
      setColorOptionsVisible(false);
      setTypeOptionsVisible(false);
      setSizeOptionsVisible(false);
    } else if (option === 'type') {
      setTypeOptionsVisible(!typeOptionsVisible);
      setColorOptionsVisible(false);
      setSeasonOptionsVisible(false);
      setSizeOptionsVisible(false);
    } else if (option === 'size') {
      setSizeOptionsVisible(!sizeOptionsVisible);
      setColorOptionsVisible(false);
      setSeasonOptionsVisible(false);
      setTypeOptionsVisible(false);
    }
  };

  const closeOptions = () => {
    setColorOptionsVisible(false);
    setSeasonOptionsVisible(false);
    setTypeOptionsVisible(false);
    setSizeOptionsVisible(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        closeOptions();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const colorOptions = [
    { value: "Blanco", backgroundColor: "#F7F9F9" },
    { value: "Azul", backgroundColor: "#AED6F1" },
    { value: "Rosa", backgroundColor: "#F5B7B1" },
    { value: "Rojo", backgroundColor: "#E74C3C" },
    { value: "Verde", backgroundColor: "#58D68D" },
    { value: "Amarillo", backgroundColor: "#F4D03F" },
    { value: "Negro", backgroundColor: "#273746" },
  ];

  const seasonOptions = ["Verano", "Invierno", "Novedad"];
  const typeOptions = ["Camiseta", "Sudadera"];
  const sizeOptions = ["XS", "S", "M", "L", "XL"];

  return (
    <FilterContainer ref={containerRef}>
      <FilterLabel onClick={() => toggleOptions('color')}>
        Color
      </FilterLabel>
      <FilterOptionsContainer isOpen={colorOptionsVisible} style={{ left: '5%' }}>
        {colorOptions.map((colorOption) => (
          <FilterOption key={colorOption.value}>
            <FilterCheckbox
              type="checkbox"
              value={colorOption.value}
              checked={selectedColors.includes(colorOption.value)}
              onChange={handleColorChange}
            />
            <ColorSwatch backgroundColor={colorOption.backgroundColor} />
          </FilterOption>
        ))}
      </FilterOptionsContainer>

      <FilterLabel onClick={() => toggleOptions('season')}>
        Temporada
      </FilterLabel>
      <FilterOptionsContainer isOpen={seasonOptionsVisible} style={{ left: '28%' }}>
        {seasonOptions.map((seasonOption) => (
          <FilterOption key={seasonOption}>
            <FilterCheckbox
              type="checkbox"
              value={seasonOption}
              checked={selectedSeasons.includes(seasonOption)}
              onChange={handleSeasonChange}
            />
            <span style={{ fontSize: '14px' }}>{seasonOption}</span>
          </FilterOption>
        ))}
      </FilterOptionsContainer>

      <FilterLabel onClick={() => toggleOptions('type')}>
        Tipo
      </FilterLabel>
      <FilterOptionsContainer isOpen={typeOptionsVisible} style={{ left: '55%' }}>
        {typeOptions.map((typeOption) => (
          <FilterOption key={typeOption}>
            <FilterCheckbox
              type="checkbox"
              value={typeOption}
              checked={selectedTypes.includes(typeOption)}
              onChange={handleTypeChange}
            />
            <span style={{ fontSize: '14px' }}>{typeOption}</span>
          </FilterOption>
        ))}
      </FilterOptionsContainer>

      <FilterLabel onClick={() => toggleOptions('size')}>
        Talla
      </FilterLabel>
      <FilterOptionsContainer isOpen={sizeOptionsVisible} style={{ left: '85%' }}>
        {sizeOptions.map((sizeOption) => (
          <FilterOption key={sizeOption}>
            <FilterCheckbox
              type="checkbox"
              value={sizeOption}
              checked={selectedSizes.includes(sizeOption)}
              onChange={handleSizeChange}
            />
            <span style={{ fontSize: '12px' }}>{sizeOption}</span>
          </FilterOption>
        ))}
      </FilterOptionsContainer>
    </FilterContainer>
  );
};

export default FilterNavBar;
