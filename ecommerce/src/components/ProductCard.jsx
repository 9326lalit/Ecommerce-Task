import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Image = styled.img`
  max-height: 180px;
  object-fit: contain;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 18px;
  color: #ff6600;
  font-weight: bold;
`;

const Button = styled.button`
  background: #ff6600;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>${product.price}</Price>
      <Button onClick={() => addToCart(product)}>Add to Cart</Button>
    </Card>
  );
};

export default ProductCard;
