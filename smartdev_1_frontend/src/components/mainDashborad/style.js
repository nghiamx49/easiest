import styled from "styled-components";
import { theme } from "../../assests/common/color";
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
  p{
    text-transform: capitalize;
    font-size: 16px;
  }
  img {
    height: 30px;
    width: 30px;
    margin-left: 10px;
    border-radius:50%;
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
    &:hover {
      background-color: ${theme.bgE5};
    }
  }
  td {
    padding: 15px 20px;
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
  margin-right: 15px;

  span {
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    text-transform: capitalize;
    color: ${theme.textAdminFunction};
    margin-left: 10px;
  }
`;
export const MainAdminPage = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  align-items: center;
  p {
    display: flex;
    align-items: center;
    padding: 5px 0;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    margin-left: 15px;
    svg {
      font-size: 10px;
      margin-top: 2px;
      margin-left: 5px;
    }
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
