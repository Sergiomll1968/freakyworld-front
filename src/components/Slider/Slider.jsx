import { useState, useEffect } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { styled } from 'styled-components';
import { sliderItems } from '../../data';
import { mobile } from '../../responsive.js';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 10px;
  ${mobile({ display: 'none' })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.direction === 'left' && '10px')};
  right: ${(props) => (props.direction === 'right' && '10px')};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: all 1.5s ease;
  transform: translate(${(props) => props.$slideindex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.$bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50%;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  font-family: 'Lobster';
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 3px;
  font-size: 20px;
  font-family: 'Lobster';
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  background-color: transparent;
  color: #333;
  cursor: pointer;
  transition: box-shadow 0.3s;
  border: none;
  border-radius: 5px;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #999;
    color: #fff;
    box-shadow: 10px 0 20px rgba(0, 0, 0, 0.2);
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
    } else {
      setSlideIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper $slideindex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} $bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>Ver ahora</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
