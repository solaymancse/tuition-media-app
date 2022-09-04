import { Wrapper, ContainerBox } from "./HeroSectionElement";
import { Container } from "react-bootstrap";
import { Navbar } from "./../Navbar/Navbar";
import { HeroContent } from './HeroContent';
export const HeroSection = () => {
  return (
    <ContainerBox strength={100}>
      <Wrapper>
        <Container>
          <Navbar />
          <HeroContent/>
        </Container>
      </Wrapper>
    </ContainerBox>
  );
};
