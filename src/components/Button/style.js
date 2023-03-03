import styled from "styled-components";

const Container = styled.button`
  background: #0d263b;
  border: none;
  color: #ffffff;
  height:44px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  font-size: 14px;
  width: 130px;
  cursor: pointer;
  border-radius: 5px;
  :active {
    opacity: 0.7;
  }
`;

export {Container};