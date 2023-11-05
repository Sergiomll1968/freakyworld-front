import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import REACT_APP_API_BASE_URL from '../../utils/constants.js';
import { Container, Wrapper, Title, Form, Input, Button, Link } from './LoginStyles.js';
import { useFetchData } from '../../hooks/useFetchData.js';
import { useUser } from '../../zustand/store.js';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const setUser = useUser( state => state.setUser );
  const { fetchData, data, error, loading } = useFetchData();

  useEffect(() => {
    if (data) {
      console.log('data', data);
      setUser({ username: data.username, email: data.email, token: data.token});
      navigate('/');
    }
  }, [data]);

  const handleClick = (e) => {
    e.preventDefault();
    fetchData({
        route: `${REACT_APP_API_BASE_URL}login`,
        method: 'POST',
        body: JSON.stringify({ 'username': username, 'password': password }),
      });
  }
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            name='username'
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder='password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick}>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login;
