import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import REACT_APP_API_BASE_URL from '../../utils/constants.js';
import { Container, MenuItem, Wrapper, Left, Language, SpainFlag, UKFlag, SearchContainer, Input, Right } from './NavBarStyles.js';
import { Search as SearchIcon, ShoppingCartOutlined, FavoriteBorderOutlined as FavoriteBorderOutlinedIcon, Person2Outlined as Person2OutlinedIcon } from '@mui/icons-material';
import { Tooltip, Badge } from '@mui/material';
import FilterNavBar from '../FilterNavBar/FilterNavBar.jsx';
import { useUser } from '../../zustand/store.js';
import { useFetchData } from '../../hooks/useFetchData.js';

const Navbar = ({ filterNavBar = true }) => {
  const [selectedFlag, setSelectedFlag] = useState('spain');
  const username = useUser((state) => state.username);
  const setUsername = useUser((state) => state.setUsername);
  const setEmail = useUser((state) => state.setEmail);
  const token = useUser((state) => state.token);
  const setToken = useUser((state) => state.setToken);
  const resetUser = useUser((state) => state.resetUser);

  const quantity = 0;

  const handleLanguageChange = (language) => {
    setSelectedFlag(language);
  };

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const { fetchData, data, error } = useFetchData();

  useEffect(() => {
    const token_storage = JSON.parse(localStorage.getItem('token_storage')).state.token;
    if (token_storage) {
      fetchData({
        route: `${REACT_APP_API_BASE_URL}users/getUserByToken/${token_storage}`,
        headers: {
          'Authorization': token_storage,
        },
      });
    }

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetchData]);

  
  useEffect(() => {
    if (data) {
      // const token = localStorage.getItem('token_storage');
      setUsername(data.username);
      setEmail(data.email);
      setToken(token);
    }
  }, [data, setEmail, setToken, setUsername, token]);

  useEffect(() => {
    if (error) {
      resetUser();
    }
  }, [error, resetUser]);

  const navbarHeight = '70px';
  
  return (
    <Container style={{ position: isNavbarFixed ? 'fixed' : 'relative', top: 0, left: 0, right: 0, zIndex: 100, backgroundcolor: 'white', height: navbarHeight }}>
    {/* <Container > */}
      <Wrapper>
        <Left>
          <Language>
            <SpainFlag selected={selectedFlag} onClick={() => handleLanguageChange('spain')}></SpainFlag>
            <UKFlag selected={selectedFlag} onClick={() => handleLanguageChange('uk')}></UKFlag>
          </Language>
          {filterNavBar && <FilterNavBar />}
        </Left>
        <Right>
          <SearchContainer>
            <Input name="searchBar" placeholder="Search" />
            <SearchIcon style={{ color: 'gray', fontSize: 9 }} />
          </SearchContainer>
          <MenuItem>
            <Wrapper>
              <Person2OutlinedIcon />
              {username ? (
                username
              ) : (
                <Tooltip title="Iniciar sesión">
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                    Iniciar sesión
                  </Link>
                </Tooltip>
              )}
            </Wrapper>
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
