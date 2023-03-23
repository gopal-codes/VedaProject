import React from 'react'
import styled from "styled-components";
import { BsEmojiHeartEyes } from 'react-icons/bs';

const Wrapper = styled.div`
padding-left: 10px;
padding-right: 10px;
background-color:#ffe8b6;
color:black;
width:100%;
height:60px;
text-align:center;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

const Text = styled.p`
font-size:1.8rem;
letter-spacing:-1px;
font-weight:900;
opacity:0.6;
margin-right:4px;
@media screen and (max-width: 1280px) {
  font-size:1rem;
  margin-right:2px;
};
`

const SnackBar = () => {

  return (
    <Wrapper>
        <Text>
            Subscribe & Save price. + a personal shopper by text
        </Text>
        <BsEmojiHeartEyes color='#f6a51d' size="20px"/>
    </Wrapper>
  )
}

export default SnackBar