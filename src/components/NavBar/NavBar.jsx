import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, MenuItem, Wrapper, Left, Language, SpainFlag, UKFlag, SearchContainer, Input, Right } from './NavBarStyles.js';
import { Search as SearchIcon, ShoppingCartOutlined, FavoriteBorderOutlined as FavoriteBorderOutlinedIcon, Person2Outlined as Person2OutlinedIcon } from '@mui/icons-material';
import {Tooltip, Badge} from '@mui/material';
import FilterNavBar from '../FilterNavBar/FilterNavBar.jsx';
import { useUser } from '../../zustand/store.js';

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
