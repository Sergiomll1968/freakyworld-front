import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { mobile } from '../../responsive.js';
import { useSelector } from 'react-redux';
import ukFlag from '../../images/uk-flag.png';
import spFlag from '../../images/sp-flag.png';
import FilterNavBar from '../FilterNavBar/FilterNavBar.jsx';

const Container = styled.div`
  height: 30px;
  // ${mobile({ height: '0px' })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  vertical-align: middle;
  ${mobile({ display: 'none' })}

  &:hover {
    text-decoration: underline;
  }

  &:after {
    content: '';
    background-image: url(${spFlag});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-left: 5px;
    opacity: ${(props) => (props.selected === 'spain' ? 1 : 0.5)};
    vertical-align: middle;
  }
`;

const UKFlag = styled.span`
  width: 20px;
  height: 20px;
  background-image: url(${ukFlag});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: inline-block;
  margin-left: 5px;
  cursor: pointer;
  opacity: ${(props) => (props.selected === 'uk' ? 1 : 0.5)};
  vertical-align: middle;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const Navbar = ({filterNavBar=true}) => {
  const [selectedFlag, setSelectedFlag] = useState('spain');
  const quantity = useSelector((state) => state.cart).quantity;

  const handleLanguageChange = (language) => {
    setSelectedFlag(language);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language selected={selectedFlag} onClick={() => handleLanguageChange('spain')}></Language>
          <UKFlag selected={selectedFlag} onClick={() => handleLanguageChange('uk')}></UKFlag>
          { filterNavBar && <FilterNavBar/> }
        </Left>
        <Right>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: 'gray', fontSize: 13 }} />
          </SearchContainer>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
