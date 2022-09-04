import styled from "styled-components";

import { NavLink } from "react-router-dom";
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 15px 0px;
`;
export const H2 = styled.h2`
  font-size: 16px;
  font-weight: normal;
`;
export const Top = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const Icon = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #89d0ca;
    }
  }
`;
export const Center = styled.div`
display: flex;
gap:10px;

`;
export const Right = styled.div`
display: flex;
gap:15px;
align-items: center;

a{
    &:nth-last-child(1){
    border:1px solid #333;
    padding:5px 10px;
    background-color:#fff;
    transition: 0.5 ease-in-out;
    &:hover{
        background-color:#89d0ca;
        color:#fff;
       
    }
}
}


`;
export const Links = styled(NavLink)`

    text-decoration: none;
    color:#777777;

`;

