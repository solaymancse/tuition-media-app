import React from 'react'

import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {ContentBox} from './HeroSectionElement'
import { NavLink } from 'react-router-dom';
export const HeroContent = () => {
  return (
    <ContentBox>
        <h1>Hire The Right Tutor Today!</h1>
        <p>Book one-on-one lessons with verified tutors in your area</p>
        <NavLink to="/need">Hire a Tutor <BsFillArrowRightCircleFill/></NavLink>
        <p>Want to become a Tutor? Sign up now</p>
    </ContentBox>
  )
}
