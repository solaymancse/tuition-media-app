import React from 'react'
import { HeroSection } from '../components/HeroSection/HeroSection'
import { SearchSection } from './../components/SearchSection/SearchSection';
import { Container } from 'react-bootstrap';

export const Home = () => {
  return (
    <>
    <HeroSection/>
    <Container>
    <SearchSection/>
    </Container>
    </>
  )
}
