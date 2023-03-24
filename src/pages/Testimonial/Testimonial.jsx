import React, { useState } from 'react'
import { Circle, Circles, Desc, MainContainer, Ratings, SingleReview, Title, User, Verification, Wrapper } from './TestimonialStyle'
import { AiFillCheckCircle, AiFillStar } from 'react-icons/ai'

const Testimonial = () => {

  // Handling slide for testimonial.
  const [slideIndex,setSlideIndex] = useState(1);

  const HandleSlide = (index)=>{
    setSlideIndex(index)
  }

  return (
    <Wrapper>
      <Title>418, 929+ HappyCustomers.</Title>
      {[0,1,2].map((value,index)=>(
        <MainContainer key={value} displaying={index===slideIndex} >
        {[1,2,3].map((val)=>(
          <SingleReview key={val} num={val===2} >
            <Ratings>{[1,2,3,4,5].map((val)=>(<AiFillStar key={val} /> ))}</Ratings>
            <Desc>"I love {value+val+1000} use it to cook with.
                  Greate for soups, stirs fries and just
                  as a drink."
            </Desc>

            <User>-- Steph {val}</User>
            <Verification><AiFillCheckCircle/> Verified Buyer </Verification>
          </SingleReview>
        ))}
      
      </MainContainer>
      ))}
    
      <Circles>
        {[0,1,2].map((val,index)=>(
          <Circle onClick={()=>HandleSlide(index)} key={val} current={slideIndex===index} />
        ))}
      </Circles>
    </Wrapper>
  )
}

export default Testimonial