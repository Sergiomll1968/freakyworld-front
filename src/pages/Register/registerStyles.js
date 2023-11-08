import { styled } from 'styled-components';
import { mobile } from '../../responsive.js';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:
    linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

export const ConditionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const Agreement = styled.span`
  font-size: 12px;
`;

export const NotAgreement = styled(Agreement)`
  color: red;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 40%;
  margin-top: 20px;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
