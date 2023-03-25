import React, { useEffect, useState } from 'react'
import {Span, Arrows, Image, Images, ItemsShow, Left, MainContainer, NavigationText, Reviews, Right, Thumbnail, Title, Wrapper, Icon, Description, Points, ButtonTitle, Button, Price, AddToCart, CartRow, Bottom, Content, BottomText, BottomFlex } from './HeaderStyle'
import axios from "axios";
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"
import {BsStarFill,BsCheckCircle, BsImageAlt, BsPatchCheck, BsPercent} from "react-icons/bs"
import { FlexColm, FlexRow } from '../../components/globleStyle';

const Header = () => {

  // using variable for not calling useEffect twice.
  const [run,setRun]= useState(true);

  // setting image value and currentImg using useState() hook.
  const [image,setImage]= useState([]);
  const [currentImg,setcurrentImg] =useState(2);

  //using axios for data fetching with the help of useEffect() hook.
  useEffect(()=>{
    const getData = async()=>{
        const data =await axios.get("https://dummyjson.com/products/")
        setImage(data.data.products[0].images)
    }
    getData()
    // return ()=>getData();
    },[])

    // handling arrow click
    const handleClick=(direction)=>{
      if(direction==="left"){
        setcurrentImg(currentImg>0?currentImg-1:0)
      }
      if(direction==="right"){
        setcurrentImg(currentImg<3? currentImg+1: 4)
      }
      if(direction==="left" && currentImg===0){
        setcurrentImg(4)
      }
      if(direction==="right" && currentImg===4){
        setcurrentImg(0)
      }
  }


  return (
    <Wrapper>
      <div style={{display:"flex"}}>
        <NavigationText>Home  /  Product  / &nbsp;</NavigationText>
        <NavigationText clicked >Tom Yom Chicken</NavigationText>
      </div>
        
      <MainContainer>

        <Left>

            <ItemsShow>
              <Thumbnail>
                <Arrows onClick={()=>handleClick("left")} left ><IoIosArrowBack size="35px" /></Arrows>
                <Image src={image[currentImg]} currentshow /> 
                <Arrows onClick={()=>handleClick("right")} right><IoIosArrowForward size="35px" /></Arrows>
              </Thumbnail>
              <Images>
                {image && image.map((imag,index)=>(<Image eff={index===currentImg?true:false} onClick={()=>setcurrentImg(index)} key={imag} src={imag} />))}
              </Images>
            </ItemsShow>

        </Left>

        <Right>
            <Span>16.9 f| oz</Span>
            <Title>Tom Yum Chicken Keto Bone Broth</Title>
            <FlexRow>
              {[1,2,3,4,5].map((val)=>(<Icon key={val}><BsStarFill /></Icon>))} &nbsp;
              <Reviews>196 Reviews</Reviews>
            </FlexRow>

            <Description>
              Fragrant hints of ginger and lemongrass elevate clasic chicken Bone
              broth, beautifully balanced with mild chiles and slightly sweet
              coconut.
            </Description>

            {[1,2,3,4,5].map((val)=>(<Points key={val}><BsCheckCircle /> &nbsp; {val}Perfect for {val+4} comfort {val+11}d</Points>))}

            <FlexColm>
              <ButtonTitle>BUYING OPTIONS</ButtonTitle>
              <FlexRow>
                <Button>ONE TIME PURCHASE <Price>$47.94</Price></Button>
                <Button>SUBSCRIBE & SAVE <Price>$38.34</Price></Button>
              </FlexRow>
            </FlexColm>

            <FlexColm>
              <ButtonTitle>QUANTITY</ButtonTitle>
              <CartRow button >
                <Button>1-Pack<Price>$7.94</Price></Button>
                <Button>6-Pack <Price>$7.34</Price></Button>
                <Button>12-Pack <Price>$7.34</Price></Button>
                <Button>18-Pack <Price>$7.34</Price></Button>
              </CartRow>
            </FlexColm>

            <FlexColm>
              <ButtonTitle></ButtonTitle>
              <CartRow>
                <Price>$47.94</Price>
                <AddToCart cart={true} >Add to Cart</AddToCart>
              </CartRow>
            </FlexColm>
            
        </Right>

        <Bottom>
          <Content>
            <BottomFlex>
              <BsPercent size="50px" />&nbsp; &nbsp;
              <FlexColm>
                <BottomText>Full Guarantee 100%</BottomText>
                <BottomText second>Don't like it? Get a full Refund.</BottomText>
              </FlexColm>
            </BottomFlex>
            <BottomFlex>
              <BsPatchCheck size="50px"/>&nbsp; &nbsp;
              <FlexColm>
                <BottomText>Fast & free shipping</BottomText>
                <BottomText second>Arrives in 2-5 bussiness days.</BottomText>
              </FlexColm>
            </BottomFlex>
          </Content>
        </Bottom>
      </MainContainer>
    </Wrapper>
  )
}

export default Header