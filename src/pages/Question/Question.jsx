import React, { useState } from 'react'
import { Ans, Link, LinkRow, Links, MainContainer, QuestionAns, QuestionFlex, Questions, Title, Wrapper } from './QuestionStyle'
import {AiFillMessage, AiOutlineMinus,AiOutlinePlus} from "react-icons/ai"
import {BsQuestionOctagonFill} from "react-icons/bs"


const Question = () => {

  // handling answers display and icon change.
  const [Index,setIndex] = useState(0)

  const handleClick = (index)=>{
    setIndex(index)
  }

  return (
    <Wrapper>
        <Title>Frequently Asked Questions?</Title>
        <MainContainer>
            
                {[0,1,2,3].map((data,index)=>(
                <QuestionAns key={data}>
                    <QuestionFlex onClick={()=>handleClick(index)}>
                        <Questions>How itaque minus nam! At, nam dolorem ?</Questions>{(index===Index)?<AiOutlineMinus color='#ab141d' />:<AiOutlinePlus color='#ab141d' />}
                    </QuestionFlex>
                    <Ans present={index===Index} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum labore sit optio aperiam
                         quia ullam quod atque harum eius, ipsam, eaque tenetur deleniti doloribus hic error porro, voluptate similique placeat?</Ans>
                </QuestionAns>    
                ))}
                
        </MainContainer>
        
        <Links>
          <LinkRow>
              <BsQuestionOctagonFill />
              <Link top>More Frequently Asked Questions.</Link>
            </LinkRow>

            <LinkRow>
              <AiFillMessage />
              <Link>Contact Us.</Link>
            </LinkRow>
        </Links>
    </Wrapper>

  )
}

export default Question