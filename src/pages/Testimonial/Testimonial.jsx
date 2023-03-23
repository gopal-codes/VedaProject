import React from 'react'
import { Desc, MainContainer, Ratings, SingleReview, Title, User, Verification, Wrapper } from './TestimonialStyle'
import { AiFillCheckCircle, AiFillStar } from 'react-icons/ai'

const Testimonial = () => {
  return (
    <Wrapper>
      <Title>418, 929+ HappyCustomers.</Title>
      <MainContainer>
        {[1,2,3].map((val)=>(
          <SingleReview key={val}>
            <Ratings>{[1,2,3,4,5].map((val)=>(<AiFillStar key={val} /> ))}</Ratings>
            <Desc>"I love it and use it to cook with.
                  Greate for soups, stirs fries and just
                  as a drink."
            </Desc>

            <User>-- Steph B</User>
            <Verification><AiFillCheckCircle/> Verified Buyer </Verification>
          </SingleReview>
        ))}
      </MainContainer>
    </Wrapper>
  )
}

export default Testimonial