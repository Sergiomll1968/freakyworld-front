import { useState } from 'react';
import REACT_APP_API_BASE_URL from '../../utils/constants.js';
import { Container, Wrapper, Title, Form, Input, Button, Agreement, NotAgreement, ConditionsContainer, ButtonContainer } from './registerStyles.js';
import { Modal } from '../../components/Modal/Modal.jsx';
import { useFetchData } from '../../hooks/useFetchData.js';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchData, data, error, loading } = useFetchData();
  
  const handleOpenModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 3000);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    (!username || !email || !password || !confirmedPassword || !agreement) && handleOpenModal(true);
    fetchData({
      route: `${REACT_APP_API_BASE_URL}register`,
      method: 'POST',
      body: JSON.stringify({ 'username': username, 'email': email, 'password': password }),
    });
    //si es ok etc
  }

  return (
    <Container>
      <Wrapper>
        <Title>Crear una cuenta</Title>
        <Form>
          <Input 
            name='username'
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            name='email'
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            name='password'
            placeholder='password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            name='confirmedPassword'
            placeholder='confirm password'
            type='password'
            onChange={(e) => setConfirmedPassword(e.target.value)}
          />
        </Form>
        <ConditionsContainer>
          <div>
            <input
              name='agreement'
              type='checkbox'
              onChange={(e) => setAgreement(e.target.checked)}
            />
          </div>
          <div>
            <div>
              <Agreement>Al crear una cuenta, consiento que mis datos personales sean tratados de acuerdo a la <b>política de privacidad.</b></Agreement>
            </div>
            <div>
              { !agreement && <NotAgreement>Debes aceptar la política de privacidad</NotAgreement>}
            </div>
          </div>
        </ConditionsContainer>
        <ButtonContainer>
          <Button onClick={handleClick}>CREAR</Button>
        </ButtonContainer>
      </Wrapper>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        showCloseButton={false}
      >
        <div>
          Debes completar todos los campos y aceptar la política de privacidad
        </div>
      </Modal>
    </Container>
  )
}

export default Register;
