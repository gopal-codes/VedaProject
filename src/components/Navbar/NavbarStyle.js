import styled from "styled-components";

export const Wrapper = styled.div`
    position:relative;
    height:80px;
    text-align:center;
    display:flex;
    align-items:center;
    padding:0 30px;
    @media only screen and (max-width: 768px) {
        padding:0px 0px;
    };
`
export const NavText= styled.h2`
    font-size:1.4rem;
    margin-left:10px;
    margin-right:10px;
    font-weight:bolder;
`
export const Left= styled.div`
    flex:4.5;
    display:flex;
    align-items:center;
    @media only screen and (max-width: 768px) {
        display:none;
    };
`
export const Select= styled.select`
font-size:1.4rem;
font-weight:bolder;
border:none;
outline:none;
font-weight:bold;
`
export const Center= styled.div`
    flex:3;
`
export const CompanyName =styled.p`
    font-family:Calibri;
    font-size:3rem;
    font-style:italic;
    font-weight:900;
    @media only screen and (max-width: 768px) {
        font-size:2rem;
        text-align:left;
    };
}
`
export const Right= styled.div`
    flex:4.5;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    @media only screen and (max-width: 768px) {
        display:none;
    };
`
export const NavIcon= styled.div`
margin-left:15px;
margin-right:15px;
font-size:28px;
display:flex;
align-items:center;

`

export const ShowMenu = styled.div`
display:none;
@media only screen and (max-width: 768px) {
    display:flex;
};
`