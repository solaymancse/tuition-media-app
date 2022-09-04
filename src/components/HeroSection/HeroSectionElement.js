import styled from 'styled-components';
import img from '../../assets/bg1.jpg'
import { Parallax } from "react-parallax";

export const ContainerBox = styled(Parallax)`
width:100%;
height:750px;
` 
export const Wrapper = styled.div`
width:100%;
height:750px;
background-image: linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)), url(${img});
background-position: center;
background-size: cover;
` 
export const ContentBox = styled.div`
color:#fff;
height: 300px;
width:650px;
position: absolute;
top:40%;
display: flex;
flex-direction: column;
gap:10px;

a{
   width:300px;
    text-decoration: none;
    border: 1px solid gray;
    color:#333;
    border-radius: 10px;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#89d0ca;

    &:hover{
        background-color:#fff;
        transition: 0.5s ease-in;
    }
}
` 
