import styled from "styled-components";

export const SideBarLi = styled.li`
    list-style: none;
    background-color: transparent;
    padding: 15px 0 15px 30px;
    cursor: pointer;
    color: #A4A6B3;
    display: flex;
    align-items: center;
    svg{
       margin-right:10px;
       path{
           stroke: #A4A6B3;
       }
    }
    a{
        font-size: 16px;
        font-weight: 400;
        text-transform: capitalize;
        text-decoration: none;
        color: #fff;
    }
    &:hover{
        background-color: #9FA2B4;
        border-left: 3px solid #E5E5E5;
        color: #fff;
    }
    &:hover svg path{
        stroke: #fff;
    }
`;