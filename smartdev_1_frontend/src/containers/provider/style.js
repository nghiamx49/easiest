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
export const InputControls = styled.div`
   label{
       font-size: 16px;
       text-transform: capitalize;
       margin-right: 10px;
       display: inline-block;
       width: 180px;
       font-size: 15px;
      font-weight: 500;
   }
   input{
      margin:5px 0;
      padding:5px 10px;
      width:300px;
      outline:none;
      border:1px solid #bbb;
      border-radius:3px;
      display:inline-block;
      box-sizing:border-box;
      transition:0.2s ease all;
   }
`;
export const ContainerTable = styled.div`
  min-height:740px;
  
  background-color:${theme.white}
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
export const BtnCreate = styled.button`
   background-color: ${theme.textRed};
   color:${theme.white};
   font-size: 15px;
   font-weight: 500;
   display: block;
   padding: 10px 30px;
   border: none;
   outline: none;
   border-radius: 3px;
   margin-top: 30px;
   margin-left: 380px;
   text-transform: capitalize;
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
    line-height: 14px;
    padding: 10px 20px;
    color: ${theme.textTitleTable};
    text-transform: capitalize;
  }
  tbody tr {
    border-top: 1.5px solid #dfe0eb;
    text-transform: capitalize;
    font-size: 10px;
    td:nth-child(1){
      word-wrap: break-word;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      width:150px;
      height: 70px;
      padding-top: 30px;
      box-sizing: border-box;
    }
    &:hover {
      background-color: ${theme.bgE5};
    }
  }
  td {
    padding: 10px 20px;
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
  font-size: 12px;
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
export const BtnUpdate = styled.button`
  padding: 5px 10px;
  border-radius: 3px;
  margin-right: 5px;
  background-color: ${theme.textRed};
  color:${theme.white};
  border:none;
  text-transform: capitalize;
  cursor: pointer;
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

export const Loadingbtn = styled.div`
    width: 10px;
    height: 10px;
    border:solid 3px #8822aa;
    border-radius: 50%;
    border-right-color: transparent;
    border-bottom-color: transparent;
	 -webkit-transition: all 0.5s ease-in;
    -webkit-animation-name:             rotate; 
    -webkit-animation-duration:         1.0s; 
    -webkit-animation-iteration-count:  infinite;
    -webkit-animation-timing-function: linear;
    transition: all 0.5s ease-in;
    animation-name:  rotate; 
    animation-duration:  1.0s; 
    animation-iteration-count:infinite;
    animation-timing-function: linear; 
    @keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to { 
        transform: rotate(360deg);
    }
    }
 

  @-webkit-keyframes rotate {
      from {
          -webkit-transform: rotate(0deg);
      }
      to { 
          -webkit-transform: rotate(360deg);
      }
  }

`;
export const ContainerUpdateForm = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height:100vh;
    width:100%;
    background-color:rgba(0,0,0,0.4);
    display:${props => props.showUpdate || "none"};
    justify-content:center;
    align-items: center;
    `;
export const UpdateForm = styled.div`
    position: fixed;
    top:35%;
    left: 35%;
    z-index:102;
    background-color:${theme.white};
    padding:30px;
    display:${props => props.showUpdate || "none"};
    text-transform: capitalize;
    width: 500px;
    h3{
      font-size: 20px;
    }
`;

export const Pagination = styled.div`
    
    button{
      display: inline-block;
      color: black;
      padding: 8px 16px;
      text-decoration: none;
      border: none;
      outline: none;
      background-color:transparent;
      &:hover {
        background-color: #ddd;
        border-radius: 5px;
      }
    }
`;

export const ContainerProductDetail =  styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height:100%;
    width:100%;
    background-color:rgba(0,0,0,0.4);
    display: ${props => props.showDetail || "none"};
`;
export const ProductDetail = styled.div`
    height: 500px;
    width: 700px;
    background-color:#fff ;
    display:${props => props.showDetail || "none"};
    position: fixed;
    top: 15%;
    left: 27%;
    
`;
export const ProductDetailImage = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const ProductDetailImageBig = styled.div`
  height:300px;
  width:300px;
  img{
    height:100%;
    width:100%;
  }
`;
export const ProductDetailImageSmall = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    img{
      height:70px;
      width:70px;
    }
`;
export const ProductDetailContent = styled.div`
  flex-basis: 50%;
  display: flex;
  align-items: center;
`;
export const ProductDetailChil = styled.div`
height:380px;
 h3{
  font: normal normal normal 22px/27px futura-lt-w01-light,sans-serif;
    text-transform: capitalize;
    color: #191919;
    text-align: left;
    margin: 0;
    line-height: 1.2em !important;
    word-wrap: break-word;
 }
  p{
  text-align: left;
  color: #575757;
  font: normal normal normal 14px "palatino linotype",serif;
  margin: 10px 0;
  }
  
`;
export const ProductDetailStar = styled.div`
  display:flex;
  align-items: center;
  color:#575757;
  font-size: 14px;
  text-transform: capitalize;
  svg{
    margin-top: 3px;
    color: ${theme.textRed}
  }
`;
export const ProductDetailClose = styled.div`
  font-size: 20px;background-color:red;
  height:30px;
  width:30px;
  text-align: center;
  cursor: pointer;
`;
export const ProductDetailDescription = styled.div`
  width: 240px;
  font-size: 12px;
  height: 100px;
  overflow:auto;
`;
export const CreateProductSuccess = styled.div`
   position: fixed;
   top: 50px;
   left: 70%;
   animation: createSuccess 0.2s linear;
   div {
      height:150px;
      width: 300px;
      background-color: #fff;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items: center;
      box-shadow: 0 5px 15px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
   }
   strong{
      position: absolute;
      top:0;
      right:10px;
      font-size: 20px;
   }
   h3{
      text-transform: capitalize;
      display: flex;
      align-items: center;
      margin: 0;

      svg{
         font-size: 30px;
         color: green;
      }
   }
   @keyframes createSuccess {
      0%{
         top:-160px;
         opacity:0;
      }
      100%{
         top: 50px;
         opacity:1;
      }
   }
`;