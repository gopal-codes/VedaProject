import styled from "styled-components";
import { FlexRow } from "../../components/globleStyle";

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    border-bottom:1px solid gray;
    border-top:1px solid gray;
    padding-top:100px;
`
export const Title = styled.p`
    font-size:3rem;
    font-family:Calibria;
    font-weight:800;
    margin-bottom:80px;
    @media screen and (max-width: 1280px) {
        text-align:center;
        margin-bottom:40px;
      };
`
export const MainContainer = styled.div`
    max-width:800px;
`
export const QuestionAns = styled.div`
    border:none;
    border-bottom:1px solid #a9a69e;
    margin-bottom:20px;
    padding-bottom:40px;
    @media screen and (max-width: 1280px) {
        padding-left:7px;
        padding-right:7px;
      };
`
export const QuestionFlex = styled(FlexRow)`
    align-items:center;
    justify-content:space-between;
    font-size:3.5rem;
    cursor:pointer;
`
export const Questions = styled.p`
    font-size:1.8rem;
    font-weight:600;
    font-family:Calibria;
`
export const Ans = styled.p`
    font-size:1.4rem;
    color:rgb(145 141 132);
    display:${({present})=>present?"flex":"none"};    
`

export const Links = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:50px;
    margin-bottom:150px;
    @media screen and (max-width: 1280px) {
        flex-direction:column;
        align-items:center;
        margin-bottom:80px;
      };
`
export const LinkRow = styled(FlexRow)`
    align-items:center;
    font-size:30px;
    color:#ab141d;
    margin:0px 30px;
    @media screen and (max-width: 1280px) {
        justify-content:center;
        margin-bottom:30px;
        text-align:center;
      };
`

export const Link = styled.div`
    cursor:pointer;
    border-bottom:1px solid gray;
    font-size:1.5rem;
    font-weight:700;
    font-family:Calibria;
    color:#a9a69e;
    margin-left:10px;
    &:hover{
        color:#333;
    };
    @media screen and (max-width: 1280px) {
        margin-left:${({top})=>top?"-10px":""}
      };
`
