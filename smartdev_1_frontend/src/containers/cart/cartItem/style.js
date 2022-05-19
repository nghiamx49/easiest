import styled from "styled-components";
import { theme } from "../../../assests/common/color";
export const CartItemLayout = styled.div`
  margin-top: 1.5rem;
  input[type="checkbox"] {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
    width: 16px;
    height: 16px;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.14);
    text-align: center;
    box-shadow: inset 0 2px 0 0 rgb(0 0 0 / 2%);
    margin-right: 8px;
  }
`;
export const ShopName = styled.div`
  display: flex;
  background-color: ${theme.white};
  min-height: 5rem;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.gray};
`;
export const Left = styled.div`
  margin: auto;
  flex-basis: 30%;
  display: flex;
  align-items: center;
  padding: 10px 0px;
  &:hover {
    cursor: pointer;
  }

  img {
    max-height: 15rem;
    margin-left: 2rem;
  }

  span {
    margin-left: 2rem;
    background-color: ${theme.textRed};
    color: ${theme.white};
    padding: 0px 8px;
    border-radius: 2px;
    font-size: 12px;
  }
  p {
    margin-left: 2rem;
  }
`;
export const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-basis: 60%;
`;
export const ColumnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: auto;
  input {
    height: 28px;
    width: 50px;
    border: 1px solid rgba(0, 0, 0, 0.09);
    text-align: center;
  }
`;
export const BtnPlus = styled.button`
  transition: background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  background: transparent;
  color: rgba(0, 0, 0, 0.8);
  width: 32px;
  height: 32px;
  &:hover {
    cursor: pointer;
    background-color: ${theme.textRed};
  }
`;
export const BtnDelete = styled.button`
  transition: background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  background: transparent;
  color: rgba(0, 0, 0, 0.8);
  width: 64px;
  height: 32px;
  &:hover {
    background-color: ${theme.textRed};
    cursor: pointer;
  }
`;
export const Magess = styled.div`
  display: flex;
  background-color: white;
  min-height: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid ${theme.gray};
  div {
    padding-left: 5rem;
  }
`;

export const Quantity = styled.div`
  border: 1px solid white;
  padding: 5px;
`;
