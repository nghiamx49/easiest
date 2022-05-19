import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../assests/common/color";

export const ProductContainer = styled(Link)`
  position: relative;
  height: 300px;
  margin-right: 10px;
  width: 185px;
  margin-bottom: 10px;
`;
export const ProductStyle = styled.div`
  height: 300px;
  width: 185px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;
  transition: 0.2s all ease;
  border-top-left-radius: 0.125rem;
  border-top-right-radius: 0.125rem;
  outline: none;
  box-shadow: 0 0.0625rem 0.125rem 0 rgb(0 0 0 / 10%);
  box-sizing: border-box;
  &:hover {
    top: -3px;
    z-index: 10;
    border: 1px solid rgb(238, 77, 45);
    box-shadow: rgb(0 0 0 / 5%) 0px 0.0625rem 20px 0px;
  }
  &:hover .similar {
    display: block;
    z-index: 10;
  }
`;

export const ProductImage = styled.div`
  max-width: 185px;
  height: 200px;
  overflow: hidden;
  box-sizing: border-box;
  img {
    height: 100%;
    width: 100%;
  }
`;
export const ProductDiscount = styled.div`
  top: 0;
  right: 0;
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 51% 86%, 0 100%);
  background-color: #f6cf32;
  width: 45px;
  height: 55px;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  color: ${theme.textRed};
`;
export const ProductFavourite = styled.div`
  top: 20px;
  left: 0;
  background-color: ${theme.textRed};
  height: 15px;
  width: 60px;
  position: absolute;
  text-align: center;
  color: ${theme.white};
  font-size: 10px;
`;
export const DivProductName = styled.div`
  padding: 5px;
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
export const NameProduct = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: 12px;
  overflow-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
export const ProductBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 10px;
  p {
    margin: 0;
  }
`;
export const ProductPrice = styled.p`
  color: ${theme.textRed};
  font-size: 16px;
  span {
    font-size: 12px;
  }
`;
export const ProductSold = styled.p`
  color: ${theme.gray};
  font-size: 12px;
`;
export const ProductSimilar = styled.div`
  background-color: ${theme.textRed};
  font-size: 18px;
  text-align: center;
  width: 100%;
  color: white;
  height: 30px;
  background-color: rgb(238, 77, 45);
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 30px;
  position: absolute;
  bottom: -30px;
  left: -1px;
  border: 1px solid rgb(238, 77, 45);
  z-index: 1;
  transition: 0.2s all ease;
  display: none;
`;
