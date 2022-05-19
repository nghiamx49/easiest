import styled from "styled-components";
import { theme } from "../../../../assests/common/color";
export const MainAdminContainer = styled.div`
  flex-basis: 80%;
`;
export const MainAdminHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  height: 30px;
  margin: 20px 20px;
  box-sizing: border-box;
  overflow: hidden;
`;
export const MainAdminHeaderRight = styled.div`
  display: flex;
`;
export const MainAdminHeaderUser = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 30px;
    width: 30px;
    margin-left: 10px;
  }
`;
export const MainAdminHeaderSearch = styled.div`
  border-right: 1px solid ${theme.gray};
  margin-right: 15px;
  padding-right: 15px;
  p {
    display: flex;
    align-items: center;
    svg {
      margin-top: 5px;
      margin-right: 10px;
    }
  }
`;
export const ContainerTable = styled.div`
  min-height: 340px;
  background-color: ${theme.white};
`;

export const MainAdminContent = styled.div`
  margin: 30px;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
`;
export const MainAdminTable = styled.table`
  width: 100%;
  background: ${theme.white};
  box-sizing: border-box;
  border-collapse: collapse;
  thead {
  }
  tbody {
  }
  th {
    text-align: left;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    padding: 10px 20px;
    color: ${theme.textTitleTable};
  }
  tbody tr {
    border-top: 1.5px solid #dfe0eb;

    height: 50px;
    &:hover {
      background-color: ${theme.bgE5};
    }
  }
  td {
    padding: 15px 20px;
  }
`;
export const ButtonBan = styled.button`
  background-color: #f3836c;
  border-radius: 2px;
  padding: 5px;
  margin-left: 5px;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`;

export const ButtonApprove = styled.button`
  background-color: #24a5fb;
  border-radius: 2px;
  padding: 5px;
  margin-left: 5px;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`;

export const MainAdminFlex = styled.div`
  display: flex;
  img {
    margin-right: 15px;
  }
`;
export const MainAdminAllUser = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
`;
export const MainAdminStrong = styled.strong`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: ${theme.black};
`;
export const MainAdmintextfunction = styled.p`
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-left: 15px;
  svg {
    font-size: 20px;
  }
  button {
    padding: 0px 10px;
    height: 20px;
    box-sizing: border-box;
    background: #ccc;
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
export const MainAdminPage = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  align-items: center;
  padding-right: 30px;
  border-top: 1.5px solid #dfe0eb;
  button {
    background: #ccc;
    padding: 5px 10px;
    margin: 1px;
    text-decoration: none;
    color: #000;
    font-weight: 600;
    position: relative;
    border-radius: 3px;
    transition: 0.3s;
    border: none;
    &:hover {
      background: #adadad;
      transition-duration: 0.3s;
    }
  }
  span {
    font-size: 15px;
    font-weight: 600;
    margin-right: 10px;
  }
`;

export const LogoutButton = styled.button`
  margin-right: 5px;
  border: none;
  padding: 5px;
  background-color: inherit;
  :hover {
    cursor: pointer;
    color: red;
  }
`;
export const ButtonSort = styled.button``;
export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  input {
    border-radius: 20px;
    border: 1px solid gray;
    height: 20px;
    width: 200px;
    padding: 14px 15px;
    box-sizing: border-box;
    position: relative;
    font-size: 12px;
    outline: none;
  }
  button {
    font-size: 14px;
    position: absolute;
    top: 12px;
    right: 0;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
