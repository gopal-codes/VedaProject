import React from 'react'
import { Title } from '../Testimonial/TestimonialStyle'
import { Button, ChildDiv, Container, Content, ImageTitle, ParentImage, Wrapper } from './RecipeStyle'

const Recipe = () => {
  return (
    <Wrapper>
      <Title>Mouth-Watering Recipes</Title>
        <Container>

          <Content>
            <ParentImage src="https://rb.gy/rdtso2" />
            <ChildDiv first={true}>
              <ImageTitle>Mouth-Watering Recipes</ImageTitle>
              <Button first={true} >MAKE IT</Button>
            </ChildDiv>
          </Content>

          <Content>
            <ParentImage src='https://rb.gy/z9odpu' />
            <ChildDiv>
              <ImageTitle>Stuffed Bell Peppers</ImageTitle>
              <Button>MAKE IT</Button>
            </ChildDiv>
          </Content>

        </Container>
    </Wrapper>
  )
}

export default Recipe