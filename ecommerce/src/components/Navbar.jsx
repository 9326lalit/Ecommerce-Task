







import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-right: 20px;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-grow: 1;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 14px;
  position: relative;
  &:hover::after,
  &:focus::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: black;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 14px;
  color: black;
`;

const CartLink = styled.span`
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProductItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
`;

const ProductInfo = styled.div`
  flex-grow: 1;
  text-align: left;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const QuantityButton = styled.button`
  background: #ddd;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
`;

const QuantityText = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const RemoveButton = styled.button`
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
`;

const TotalContainer = styled.div`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: right;
`;

const CheckoutButton = styled.button`
  background: black;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
`;

const Navbar = () => {
  const { cart, setCart, setOrders } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const updateQuantity = (index, change) => {
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: Math.max(1, (item.quantity || 1) + change) } : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0).toFixed(2);

  const handleCheckout = () => {
    setOrders(cart);
    setIsModalOpen(false);
    navigate("/my-order");
  };

  return (
    <>
      <NavbarContainer>
        <NavContainer>
          <Logo>Ecommerce</Logo>
          <NavLinks>
            <NavLink to="/">All</NavLink>
            <NavLink to="/cloths">Cloths</NavLink>
            <NavLink to="/electronic">Electronics</NavLink>
            <NavLink to="/furnitures">Furnitures</NavLink>
            <NavLink to="/toys">Toys</NavLink>
          </NavLinks>
        </NavContainer>
        <UserInfo>
          <span>userintheapp@test.com</span>
          <NavLink to="/my-order">My Orders</NavLink>
          <NavLink to="/account">My Account</NavLink>
          <CartLink onClick={() => setIsModalOpen(true)}>🛒 {cart.length}</CartLink>
        </UserInfo>
      </NavbarContainer>

      {isModalOpen && (
         <ModalOverlay>
           <ModalContent>
             <CloseButton onClick={() => setIsModalOpen(false)}>✖</CloseButton>
             <h2>My Order</h2>
             {cart.length > 0 ? (
               <ProductList>
                 {cart.map((product, index) => (
                   <ProductItem key={index}>
                     <ProductImage src={product.images[0]} alt={product.title} />
                     <ProductInfo>
                       <p>{product.title}</p>
                       <p>${product.price}</p>
                     </ProductInfo>
                     <QuantityContainer>
                       <QuantityButton onClick={() => updateQuantity(index, -1)}>-</QuantityButton>
                       <QuantityText>{product.quantity}</QuantityText>
                       <QuantityButton onClick={() => updateQuantity(index, 1)}>+</QuantityButton>
                     </QuantityContainer>
                     <RemoveButton onClick={() => removeFromCart(index)}>✖</RemoveButton>
                   </ProductItem>
                 ))}
               </ProductList>
             ) : (
               <p>Your cart is empty.</p>
             )}
             <TotalContainer>Total: ${totalPrice}</TotalContainer>
             <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
           </ModalContent>
         </ModalOverlay>
      )}
    </>
  );
};

export default Navbar;
