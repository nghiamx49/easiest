import styled from "styled-components";

export const Container = styled.div`
  max-width: 950px;
  margin: auto;
`;

export const Decoration = styled.div`
  height: 3px;
  width: 100%;
  background-position-x: -30px;
  background-size: 116px 3px;
  background-image: repeating-linear-gradient(
    45deg,
    #6fa6d6,
    #6fa6d6 33px,
    transparent 0,
    transparent 41px,
    #f18d9b 0,
    #f18d9b 74px,
    transparent 0,
    transparent 82px
  );
`;

export const SectionContainer = styled.div`
  width: 100%;
  margin: 20px 0px;
  background-color: white;
  hr {
    opacity: 0.7;
  }
`;

export const AdressContainer = styled.div`
  padding: 0px 10px;
  display: flex;
  align-items: center;
  color: #ee4d2d;
  h2 {
    font-size: 20px;
    font-weight: 400;
    margin-left: 5px;
  }
`;

export const UserInformation = styled.div`
  display: flex;
  padding: 0px 10px;
  align-items: center;
  h3 {
    padding: 0 3px;
  }
  span {
    margin-left: 40px;
    opacity: 0.7;
    font-size: 12px;
    font-weight: 600;
  }
`;

export const Product = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductInfo = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  span {
    justify-items: center;
    padding-right: 100px;
    opacity: 0.7;
    font-size: 12px;
    font-weight: 600;
    &:last-child {
      padding-right: 0;
    }
  }
`;

export const ProductNameAndImg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
    border: 1px groove gray;
    margin-right: 10px;
  }
`;

export const MethodContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PaymentMethod = styled.button`
  border-radius: 2px;
  border: 1px solid black;
  opacity: 0.9;
  font-weight: 500;
  padding: 15px;
  &:hover {
    cursor: pointer;
    border: 1px solid #ee4d2d;
    color: #ee4d2d;
  }
`;

export const MethodDetail = styled.div`
  margin-left: 10px;
  h1 {
    opacity: 0.7;
  }
`;

export const PaymentDetail = styled.div`
  margin-left: 10px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      margin: 10px 0;
      justify-items: flex-start;
      font-size: 20px;
      font-weight: 600;
      opacity: 0.7;
      :last-child {
        margin-right: 10px;
      }
    }
  }
`;

export const Total = styled.h4`
  color: #ee4d2d;
  font-size: 30px;
  font-weight: 700;
  margin-right: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const PaymentButton = styled.button`
  background-color: #ee4d2d;
  color: white;
  padding: 20px;
  border: none;
  border-radius: 2px;
  margin: 10px;
  &:hover {
    cursor: pointer;
    background-color: #f23f1f;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
