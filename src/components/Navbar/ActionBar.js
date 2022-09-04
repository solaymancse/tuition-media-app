import React from 'react'
import { Wrapper,Center,Links,Right} from './NavbarElement';


export const ActionBar = () => {
  return (
    <Wrapper>
        <div><h1>Tution Media</h1></div>
        <Center>
            <Links to="/">Home</Links>
            <Links to="/">About</Links>
            <Links to="/">Contact</Links>
        </Center>
        <Right>
            <Links to="/sign-in">Sign In</Links>
            <Links to="/sign-in">Tuition Board</Links>
            <Links to="/sign-in">Become a Tutor</Links>
        </Right>
    </Wrapper>
  )
}
