import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { sliderItems } from '../../data';
import { mobile } from '../../responsive.js';

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  position: relative;
  overflow: hidden;
  // margin-top: 20px;
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
  height: 20%;
  transition: all 1.5s ease;
  transform: translate(${(props) => props.$slideindex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  overflow: hidden;
`;

const InfoContainer = styled.div`
  padding: 10px;
  width: 100%;
  position: absolute;
  top: 7px;
  left: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 100%; 
  height: 100%; 
`;

const Title = styled.h1`
  font-size: 80px;
  font-family: '>Verdana';
  color: #333; 
  margin-top: 25px;
  margin-left: 50px;
`;

const Description = styled.p`
font-size: 30px;
font-family: '>Verdana';
color: #333;
margin-top: -35px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-family: '>Verdana';
  font-size: 18px;
  color: #111;
  cursor: pointer;
  transition: box-shadow 0.3s;
  border: 0;
  border-radius: 5px;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #999;
    color: #fff; 
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
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
      </Arrow>
    </Container>
  );
};

export default Slider;

