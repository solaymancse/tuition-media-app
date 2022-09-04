import React from "react";
import { MdCall } from "react-icons/md";
import {
  RiFacebookCircleFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";
import { ActionBar } from "./ActionBar";
import { Wrapper, H2, Top, Icon } from "./NavbarElement";
export const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Top>
          <MdCall />
          <H2>+8801864472623</H2>
        </Top>
        <Icon>
          <a href="/">
            {" "}
            <RiFacebookCircleFill />
          </a>
          <a href="/">
            {" "}
            <RiYoutubeFill />
          </a>
          <a href="/">
            {" "}
            <RiInstagramFill />
          </a>
          <a href="/">
            {" "}
            <RiLinkedinFill />
          </a>
        </Icon>
      </Wrapper>
      <ActionBar/>
    </>
  );
};
