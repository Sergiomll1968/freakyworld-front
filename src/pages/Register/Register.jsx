import { Container, Wrapper, Title, Form, Input, Button, Agreement } from './registerStyles.js';

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Crear una cuenta</Title>
        <Form>
          <Input placeholder='username'/>
          <Input placeholder='email'/>
          <Input placeholder='password'/>
          <Input placeholder='confirm password'/>
          <Agreement>Al crear una cuenta, consiento que mis datos personales sean tratados de acuerdo a la <b>política de privacidad.</b></Agreement>
          <Button>CREAR</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register;
