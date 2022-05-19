import styled, { keyframes } from "styled-components";
import { theme } from "../../assests/common/color";

export const Container = styled.div`
  display: flex;
  max-width: 1150px;
  margin: 0 auto;
  font-size: 16px;
`;

export const MainContent = styled.div`
  margin: 30px;
  width: 950px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 13%);
  border-radius: 0.125rem;
`;

export const UserInfoContainer = styled.div`
  font-weight: 400;
  opacity: 0.7;
  margin: 15px;
  p {
    opacity: 0.5;
  }
`;

export const HrCustom = styled.hr`
  opacity: 0.5;
  margin: 0;
`;

export const OrderDetailContainer = styled.div`
  hr {
    width: 96%;
    opacity: 0.5;
    padding: 0;
    margin: 0 auto;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const StoreContainer = styled.div`
  display: flex;
  margin: 0 15px;
  font-weight: 300;
  align-items: center;
  b {
    margin-left: 10px;
    padding: 10px 0;
  }
`;

export const ProductDetail = styled.div`
  margin: 15px;
  display: flex;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
    border-style: groove;
  }
  ul {
    margin: 0;
    padding-left: 10px;
    list-style: none;
  }
  justity-content: center;
`;

export const ProductName = styled.h4`
  while-space: wrap;
  width: 400px;
  overflow: hidden;
  text-overflow: clip;
`;

export const Price = styled.div`
  text-align: right;
  margin-top: 30px;
  margin-left: 150px;
  font-weight: bold;
  color: #ee4d2d;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  jusity-content: flex-end;
  opacity: 0.5;
  div {
    display: flex;
    align-items: center;
    b {
      padding-left: 10px;
      margin: 5px 0;
      margin-right: 10px;
    }
  }
`;

export const Button = styled.button`
  padding: 12px 20px;
  margin: 10px;
  float: right;
  border-radius: 5px;
  border: 1px solid ${theme.white};
  box-sizing: border-box;
  background-color: #d73211;
  color: ${theme.white};
  :hover {
    cursor: pointer;
    background-color: ${theme.textRed};
  }
`;

export const Modal = styled.div`
  display: ${(props) => (props.toggle ? "block" : "none")};
  position: fixed;
  z-index: 5;
  padding-top: 150px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;
const animationDropDown = keyframes`
from {top:-300px; opacity:0}
  to {top:0; opacity:1}
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: ${animationDropDown};
  animation-duration: 0.4s;
`;

export const CloseButton = styled.span`
  color: white;
  float: right;
  font-size: 25px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;

export const ModelHeader = styled.div`
  background-color: #ff6533;
  padding: 2px 16px;
  color: white;
`;

export const ModalBody = styled.div`
  padding: 2px 16px;
`;
export const ModalFooter = styled.div`
  padding: 10px 16px;
  background-color: #ff6533;
  color: white;
  display: flex;
  flex-direction: row-reverse;
  button {
    padding: 10px;
    font-weight: bold;
    border: none;
    border-radius: 2px;
    &:hover {
      cursor: pointer;
      color: white;
      background-color: #e24414;
    }
  }
`;

export const RatingContainer = styled.div`
  text-align: center;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  margin: 0 auto;
`;
