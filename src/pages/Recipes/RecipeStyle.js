import styled from "styled-components"
import { FlexRow } from "../../components/globleStyle"

export const Wrapper = styled.div`
    background:#ffd996;
    padding:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    @media screen and (max-width: 1280px) {
        padding:0px;
      };
`
export const Container = styled.div`
    margin-top:50px;
    display:flex;
    gap:60px;
    justify-content:space-between;
    @media screen and (max-width: 1280px) {
        flex-direction:column;
        gap:20px;
      };
`
export const Content= styled(FlexRow)`
    width:650px;
    border-radius:10px;
    overflow:hidden;
    position:relative;
    @media screen and (max-width: 1280px) {
        max-width:400px;
      };
`
export const ParentImage = styled.img`
    width:100%;
    height:380px;
    border-radius:10px;
    object-fit:cover;
    @media screen and (max-width: 1280px) {
        height:300px;
      };
`
export const ChildDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:left;
    padding:20px 35px;
    position:absolute;
    left:0;
    top:50%;
    bottom:50%;
    transform:translateY(-50%);
    width:230px;
    height:150px;
    border-radius:10px;
    background:${({first})=>first?"#94562c":"#626f3e"};
`
export const ImageTitle = styled.p`
    font-size:1.5rem;
    font-weight:600;
    font-family:Calibria;
    color:white;
`
export const Button =styled.button`
    margin-top:10px;
    width:100px;
    font-size:1rem;
    padding:20px 15px;
    color:${({first})=>first?"#94562c":"#626f3e"};
    background-color:white;
    border:none;
    border-radius:5px;
`