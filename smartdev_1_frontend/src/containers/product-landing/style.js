import styled from "styled-components";

export const ProductLandingContainer = styled.div`
  margin: 50px auto;
  max-width: 980px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
export const ProductPage = styled.div`
  margin: 10px auto;
  max-width: 980px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-transform: capitalize;
  button:nth-child(1) {
    margin: 0px 10px;
    background-color: red;
  }
`;
