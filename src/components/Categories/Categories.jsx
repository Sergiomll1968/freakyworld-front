import {styled} from 'styled-components';
import {categories} from "../../data";
import CategoryItem from '../CategoryItem/CategoryItem.jsx';
import { mobile } from '../../responsive.js';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item}/>
      ))}
    </Container>
  )
}

export default Categories;
