import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

const OrderContainer = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const BillHeader = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProductItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #ddd;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

const ProductName = styled.span`
  font-weight: bold;
  color: #333;
`;

const ProductPrice = styled.span`
  color: #777;
`;

const TotalContainer = styled.div`
  margin-top: 20px;
  text-align: right;
  font-size: 20px;
  font-weight: bold;
  color: #222;
`;

const MyOrder = () => {
  const { orders } = useContext(CartContext);

  const totalPrice = orders.reduce((sum, item) => sum + item.price * item.quantity , 0).toFixed(2);

  return (
    <OrderContainer>
      <BillHeader>My-orders</BillHeader>
      <ProductList>
        {orders.map((product, index) => (
          <ProductItem key={index}>
            <ProductInfo>
              <ProductImage src={product.images[0]} alt={product.title} />
              <ProductDetails>
                <ProductName>{product.title} x {product.quantity}</ProductName>
                <ProductPrice>${product.price.toFixed(2)} each</ProductPrice>
              </ProductDetails>
            </ProductInfo>
            <span>${(product.quantity * product.price).toFixed(2)}</span>
          </ProductItem>
        ))}
      </ProductList>
      <TotalContainer>Total: ${totalPrice}</TotalContainer>
    </OrderContainer>
  );
};

export default MyOrder;
