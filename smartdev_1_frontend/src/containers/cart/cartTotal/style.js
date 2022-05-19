import styled from "styled-components";
import { theme } from "../../../assests/common/color";

export const Total = styled.div`
  min-width: 1150px;
  margin: 0 auto;
  background-color: ${theme.white};
  margin-top: 2rem;
`;
export const TotalCartTop = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 40px;
`;
export const Right = styled.div`
  flex-basis: 45%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  span {
    margin-right: 20px;
  }
`;
export const RightMid = styled.div`
  flex-basis: 45%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  color: ${theme.gray};
  span {
    margin-right: 20px;
  }
`;

export const TotalCartMid = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 50px;
  border: 1px solid #e8e899;
`;
export const TotalCartBottom = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  /* border: 1px solid  #e8e899; */
`;
export const RightBottom = styled.div`
  flex-basis: 45%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  color: #ae92a0;
  button {
    background-color: ${theme.textRed};
    height: 40px;
    width: 150px;
    font-size: 15px;
    color: ${theme.white};
    border: 0;
    &:hover {
      cursor: pointer;
      background-color: ${theme.red};
    }
  }
`;
export const LeftBottom = styled.div`
  margin-left: 40px;
  flex-basis: 40%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  span {
    margin-right: 20px;
  }
  button {
    border: 0;
    color: black;
    background-color: white;
    &:hover {
      color: #fa4f30;
    }
  }
`;
