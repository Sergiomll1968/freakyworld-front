import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import { styled } from "styled-components";
import { mobile } from '../../responsive.js';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${props => props.color};
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#d6d0d0" })}
`;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

const Payment = styled.img`
  width: 40%;
  height: 40px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SME</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          suscipit qui ut perferendis saepe asperiores nulla dolores laborum
          facere, aspernatur repellat quisquam incidunt veniam, ipsa molestiae
          minus corporis consectetur neque.</Desc>
        <SocialContainer>
          <SocialIcon color='#3b5999'>
            <Facebook/>
          </SocialIcon>
          <SocialIcon color='#e4405f'>
            <Instagram/>
          </SocialIcon>
          <SocialIcon color='#55acee'>
            <Twitter/>
          </SocialIcon>
          <SocialIcon color='#e60023'>
            <Pinterest/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Enlaces útiles</Title>
        <List>
          <ListItem>Página principal</ListItem>
          <ListItem>Carrito</ListItem>
          <ListItem>Moda hombre</ListItem>
          <ListItem>Moda mujer</ListItem>
          <ListItem>Accesorios</ListItem>
          <ListItem>Mi cuenta</ListItem>
          <ListItem>Mis pedidos</ListItem>
          <ListItem>Lista de deseos</ListItem>
          <ListItem>Términos</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacto</Title>
        <ContactItem>
          <Room style={{marginRight: '10px'}} /> 1st TheBridge Road, Valencia, Spain 46001
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: '10px'}} />
          00 34 666 666 666
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight: '10px'}} />
          sergiomaciaslluch@gmail.com
        </ContactItem>
        <Payment src='/src/images/payments.png'/>
      </Right>
    </Container>
  )
}

export default Footer;
