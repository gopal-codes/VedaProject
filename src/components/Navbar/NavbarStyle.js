import styled from "styled-components";

export const Wrapper = styled.div`
    position:relative;
    height:80px;
    text-align:center;
    display:flex;
    align-items:center;
    padding:0 30px;
    @media only screen and (max-width: 1280px) {
        padding:0px 0px;
    };
`
export const NavText= styled.h2`
    font-size:1.4rem;
    margin-left:10px;
    margin-right:10px;
    font-weight:bolder;
    cursor:pointer;
    transform:scale(1.03);
    &:hover{
        color:gray;
    };
    &:active{transform:scale(1);}
`
export const Left= styled.div`
    flex:4.5;
    display:flex;
    align-items:center;
    @media only screen and (max-width: 1280px) {
        display:none;
    };
`
export const Select= styled.select`
cursor:pointer;
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
    cursor:pointer;
    font-family:Calibri;
    font-size:3rem;
    font-style:italic;
    font-weight:900;
    transform:scale(1.01);
    &:active{transform:scale(1);};
    @media only screen and (max-width: 1280px) {
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
    @media only screen and (max-width: 1280px) {
        display:none;
    };
`
export const NavIcon= styled.div`
cursor:pointer;
margin-left:15px;
margin-right:15px;
font-size:28px;
display:flex;
align-items:center;
&:hover{color:gray};
&:active{transform:scale(0.9);};

`

export const ShowMenu = styled.div`
display:none;
@media only screen and (max-width: 1280px) {
    display:flex;
};
`