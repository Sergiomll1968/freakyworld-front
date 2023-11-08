import { styled } from 'styled-components';
import { mobile } from '../../responsive.js';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  margin: 13px;
  height: 40vh;
  position: relative;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -45px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  ${mobile({ height: "30vh" })}
`;

const TextContainer = styled.div`
display: flex;
flex-direction: row;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
justify-content: center;
flex-wrap: nowrap;
align-content: stretch;
align-items: baseline;
  `;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
   font-family: 'Lobster';
   color: #333;
  //  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-family: 'Lobster';
  font-size: 18px;
  color: #333;
  cursor: pointer;
  transition: box-shadow 0.3s;
  border: 1px solid #999;
  border-radius: 5px;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #999;
    color: #fff;
    box-shadow: 10px 0 20px rgba(0, 0, 0, 0.2);
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <TextContainer>
            <Title>{item.title}</Title>
          </TextContainer>
          <Button>Ver Categoría</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem;
