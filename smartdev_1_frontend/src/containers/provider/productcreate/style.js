import styled from "styled-components"
import { theme } from "../../../assests/common/color";

export const InputControls = styled.div`
   label{
       font-size: 16px;
       text-transform: capitalize;
       margin-right: 10px;
       display: inline-block;
       width: 170px;
       font-size: 15px;
       font-weight: 500;
   }
   input{
      margin:15px 0;
      padding:15px 10px;
      width:400px;
      outline:none;
      border:1px solid #bbb;
      border-radius:3px;
      display:inline-block;
      box-sizing:border-box;
      transition:0.2s ease all;
   }
   select{
      padding:15px 10px;
      width:400px;
      outline:none;
      border:1px solid #bbb;
      border-radius:3px;
      display:inline-block;
      box-sizing:border-box;
      transition:0.2s ease all;
   }
`;
export const TextAreaContainer = styled.div`
  
   margin-bottom: 20px;
   display: flex;
   align-items:center;
   label{
       font-size: 16px;
       text-transform: capitalize;
       margin-right: 10px;
       display: inline-block;
       width: 170px;
       font-size: 15px;
       font-weight: 500;
   }
   textarea{
      padding:15px 10px;
      width:400px;
      height:100px;
      outline:none;
      border:1px solid #bbb;
      border-radius:3px;
      display:inline-block;
      box-sizing:border-box;
      transition:0.2s ease all;
   }
`;
export const TitleProducts = styled.h3`
   font-size: 20px;
   text-transform: capitalize;
   margin-left: 30px;
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
   margin-left: 390px;
   text-transform: capitalize;
`;
export const InputFile = styled.input`
      color: transparent;
      margin-bottom: 10px;
      width: 190px;
      height: 40px;
      &::-webkit-file-upload-button {
      visibility: hidden;
      }
      &::before {
      content:"thêm ảnh vào sản phẩm";
      color: black;
      display: inline-block;
      background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);
      border: 1px solid #999;
      border-radius: 3px;
      padding: 5px 8px;
      outline: none;
      white-space: nowrap;
      -webkit-user-select: none;
      cursor: pointer;
      text-shadow: 1px 1px #fff;
      font-weight: 700;
      font-size: 10pt;
      }
      &:hover::before {
         border-color: black;
         
      &:active::before {
      background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9); 
      }
}

`;
export const  ContainerInputFile = styled.div`
   display: flex;
`;

export const  ContainerImages = styled.div`
   width: 400px;
   height: 120px;
   border: 1px solid #bbb;
   margin-left: -10px;
   display: flex;
   padding-top: 10px;
   box-sizing: border-box;
   img{
      margin: 0 5px;
      height: 90px;
      width:90px;
   }
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