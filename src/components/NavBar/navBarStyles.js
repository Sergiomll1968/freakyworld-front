import { styled } from 'styled-components';
import { mobile } from '../../responsive.js';
import spFlag from '../../images/sp-flag.png';
import ukFlag from '../../images/uk-flag.png';

export const Container = styled.div`
  height: 30px;
  margin-bottom: 30px;
  // ${mobile({ height: '0px' })}
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  vertical-align: middle;
  ${mobile({ display: 'none' })}
`;

export const SpainFlag = styled.span`
  width: 20px;
  height: 20px;
  background-image: url(${spFlag});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: inline-block;
  margin-left: 5px;
  cursor: pointer;
  opacity: ${(props) => (props.selected === 'spain' ? 1 : 0.5)};
  vertical-align: middle;
`;

export const UKFlag = styled.span`
  width: 20px;
  height: 20px;
  background-image: url(${ukFlag});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: inline-block;
  margin-left: 5px;
  cursor: pointer;
  opacity: ${(props) => (props.selected === 'uk' ? 1 : 0.5)};
  vertical-align: middle;
`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;
