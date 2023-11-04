import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import { ShoppingCartOutlined } from '@mui/icons-material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { mobile } from '../../responsive.js';
// import { useSelector } from 'react-redux';
import ukFlag from '../../images/uk-flag.png';
import spFlag from '../../images/sp-flag.png';
import FilterNavBar from '../FilterNavBar/FilterNavBar.jsx';
import { useUser } from '../../zustand/store.js';

const Container = styled.div`
  height: 30px;
  margin-bottom: 30px;
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
  display: flex;
  vertical-align: middle;
  ${mobile({ display: 'none' })}
`;

const SpainFlag = styled.span`
  width: 20px;
  height: 20px;
  background-image: url(${spFlag});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: inline-block;
  margin-left: 5px;
  cursor: pointer;
  opacity: ${(props) => (props.selected === 'spain' ? 1 : 0.5)};
  vertical-align: middle;
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
  const user = useUser(state => state.user);
  // const quantity = useSelector((state) => state.cart).quantity;
  const quantity = 0;

  const handleLanguageChange = (language) => {
    setSelectedFlag(language);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            <SpainFlag selected={selectedFlag} onClick={() => handleLanguageChange('spain')}></SpainFlag>
            <UKFlag selected={selectedFlag} onClick={() => handleLanguageChange('uk')}></UKFlag>
          </Language>
          { filterNavBar && <FilterNavBar/> }
        </Left>
        <Right>
          <SearchContainer>
            <Input name="searchBar" placeholder="Search" />
            <SearchIcon style={{ color: 'gray', fontSize: 13 }} />
          </SearchContainer>
          <MenuItem>
            <Tooltip title="Iniciar sesión">
              <Link to="/login" style={{textDecoration: 'none'}}>
                <Wrapper>
                <Person2OutlinedIcon />
                { user ? user.username : ''}
                </Wrapper>
              </Link>
            </Tooltip>
          </MenuItem>
          <Link to="/whistlist">
            <MenuItem>
              <Badge badgeContent={quantity} showZero color="primary">
                <FavoriteBorderOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} showZero color="primary">
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
