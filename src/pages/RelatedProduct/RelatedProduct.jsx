import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import {  FlexRow } from '../../components/globleStyle'
import { Card, Image, MainContainer, ProductTitle, Review, ReviewColumn, StarFlex, Title, Wrapper } from './RelatedProductStyle'
import axios from "axios";

const RelatedProduct = () => {

    //fetching data from api and updating state.
    const [data,setData] = useState([]);

    useEffect(()=>{
        const Fetch= async()=>{
            const res=await axios.get("https://dummyjson.com/product")
            setData(res.data.products[0])
        } 
        Fetch()
        //return ()=>Fetch()
     },[])


  return (
    <Wrapper>
        <Title>Related Product</Title>
        <MainContainer>
            {[1,2,3,4,5,6,7,8].map((item)=>(
                <Card key={item}>
                    <Image alt='reltedimg' src={data.thumbnail} />
                    
                    <ReviewColumn>
                        <FlexRow>
                            {[1,2,3,4,5].map((it)=> (<StarFlex key={it}><AiFillStar /></StarFlex>))}
                        </FlexRow>
                        <Review>8445 Reviews</Review>
                    </ReviewColumn>

                    <ProductTitle>{data.title}</ProductTitle>
                
                </Card>
            ))}
        </MainContainer>
    </Wrapper>
  )
}

export default RelatedProduct