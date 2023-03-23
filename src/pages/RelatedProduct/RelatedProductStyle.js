import styled from "styled-components";
import { FlexColm, } from "../../components/globleStyle";

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:100px 80px;
    @media screen and (max-width: 1280px) {
        text-align:center;
      };
`
export const Title = styled.p`
    font-size:3rem;
    font-weight:900;
`
export const MainContainer =styled.div`
    max-width:1280px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:80px;
    margin-top:100px;
    @media screen and (max-width: 1280px) {
        margin-top:60px;
      };
`
export const Card = styled.div`
    width:250px;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media screen and (max-width: 1280px) {
        width:350px;
      };
`
export const Image = styled.img`
    width:100%;
    height:120px;
    border-radius:5px;
    @media screen and (max-width: 1280px) {
        height:150px;
      };
`
export const StarFlex = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    color:#f9a216;
    font-size:22px;
    @media screen and (max-width: 1280px) {
        font-size:30px;
      };
`
export const ReviewColumn= styled(FlexColm)`
    margin-top:30px;
    margin-bottom:15px;
    align-items:center;
    gap:5px;
    @media screen and (max-width: 1280px) {
        margin-top:20px;
      };
`
export const Review = styled.p`
    color:#a9a69e;
    font-size:1.4rem;
    font-weight:900px;
    @media screen and (max-width: 1280px) {
        font-size:1.8rem;
      };
`
export const ProductTitle = styled.p`
    font-weight:900;
    font-size:1.6rem;
    @media screen and (max-width: 1280px) {
        font-size:2rem;
      };
`