import styled from "styled-components";
import { FlexRow } from "../../components/globleStyle";

export const Wrapper = styled.div`
    background-color:#fdf9ed;
    padding:50px 40px;
    position:relative;
    @media screen and (max-width: 1280px) {
        padding:20px 10px;
      };
`
export const NavigationText = styled.p`
    font-family: Helvetica;
    font-size:1.2rem;
    color:${({clicked})=>clicked?"#36332e":"#a9a69e"};
    display:flex;
`
export const MainContainer = styled.div`
    display:flex;
    margin-bottom:250px;
    @media screen and (max-width: 1280px) {
        display:flex;
        flex-direction: column;
      };
`
export const Left = styled.div`
    flex:1.3;
    display:flex;
    justify-content:center;
    margin-top:10rem;
    @media screen and (max-width: 1080px) {
        margin-top:20px;
        flex:1;
      };
`


export const Image = styled.img`
    z-index:1;
    border-radius:5px;
    height:${({currentshow})=>currentshow?"280px":"35px"};
    width:${({currentshow})=>currentshow?"500px":"55px"};
    margin-bottom:${({currentshow})=>currentshow?"150px":"0px"};
    padding:${({currentshow})=>!currentshow?"20px 10px":""};
    background-color:${({currentshow})=>!currentshow?"white":"ntransparet"};
    outline: ${({eff})=>eff?"2px solid #ab141d":"2px solid transparent"};
    @media screen and (max-width: 1280px) {
        max-width:${({currentshow})=>currentshow?"400px":"45px"};
        margin-bottom:${({currentshow})=>currentshow?"100px":"0px"};
      };
`

export const Thumbnail = styled.div`
    display:flex;
    position:relative;
`
export const Arrows = styled.div`
    position:absolute;
    left:${({left})=>left?"-100px":""};
    right:${({left})=>left?"":"-100px"};
    z-index:3;
    top:100px;
    padding:13px;
    background-color:#fff;
    border-radius:50%;
    &:hover{
        transform: scale(0.9);
        background-color:#f9a216;
        color:white;
    };    
    @media screen and (max-width: 769px) {
        left:${({left})=>left?"18px":""};
        right:${({right})=>right?"18px":""};
        padding:7px;
    };
`

export const ItemsShow = styled.div`
    display:flex;
    flex-direction:column;
    ${Thumbnail}:nth-child(1) ${Arrows} {
        opacity:0.4;
      };
    &:hover{
        ${Thumbnail}:nth-child(1) ${Arrows} {
            opacity:1;
          };
    }
`

export const Images = styled.div`
    display:flex;
    justify-content:space-between;
    @media screen and (max-width: 1280px) {
        margin:0 25px;
    };
`

export const Right = styled.div`
    font-family: Helvetica;
    flex:1;
    display:flex;
    flex-direction:column;
    @media screen and (max-width: 1280px) {
        align-items:center;
        text-align:center;
        margin-top:80px;
      };
`
export const Span  = styled.span`
    font-size:1.2rem;
    color:#a9a69e;
    margin-bottom:10px;
`
export const Title = styled.p`
    font-size:3rem;
    font-weight:800;
    font-family:clibria;
    word-wrap:wrap;
    margin-bottom:20px;
    
`
export const Icon = styled.div`
    font-size:18px;
    color:#f9a216;
    margin-bottom:25px;
    @media screen and (max-width: 1280px) {
        font-size:22px;
      };
`
export const Reviews = styled.p`
    text-decoration-line: underline;
    text-decoration-style: solid; 
    @media screen and (max-width: 1280px) {
        font-size:1.2rem;
      }; 
`
export const Description= styled.p`
    font-weight:500;
    font-size:1.6rem;
    color:#36332e;
    margin-bottom:25px;
    @media screen and (max-width: 1280px) {
        max-width:769px;
      };
`
export const Points = styled.div`
    display:flex;
    font-size:1.4rem;
    color:#36332e;
    margin-top:10px;
`
export const ButtonTitle = styled.p`
    margin-top:30px;
    font-weight:400;
    font-size:1.1rem;
`
export const Button= styled.button`
    background:white;
    padding:30px 20px;
    cursor:pointer;
    box-shadow: 0 0 3px 0px #888;
    border:0px solid grey;
    font-size:1.3rem;
    font-weight:500;
    margin:10px 5px;
    border-radius:7px;
    flex:${({cart})=>cart?"":"1"};
    &:active{
        outline:2px solid #ab141d;
        color:#ab141d;
    };
    &:hover{
        & > h3{
            color:green;
        };
    };
`
export const Price = styled.h3`
    font-size:1.4rem;
    color:#a9a69e;
`
export const CartRow = styled(FlexRow)`
    justify-content:space-around;
    align-items:center;
    @media screen and (max-width: 1280px) {
        flex-direction:${({button})=>button?"":"column"};
        gap:${({button})=>button?"0px":"15px"};
        flex-wrap:${({button})=>button?"wrap":"nowrap"};
    };
`
export const AddToCart = styled.button`
    color:white;
    width:300px;
    border-radius:7px;
    height:60px;
    cursor:pointer;
    font-size:1.4rem;
    background-color:#ab141d;
    border:none;
    &:active{
        transform:scale(1.01);
    };
`

export const Bottom = styled.div`
    display:flex;
    justify-content:center;
    position:absolute;
    bottom:-40px;
    width:100%;
    @media screen and (max-width: 1280px) {
        left:50%;
        right:50%;
        transform: translateX(-50%);
        width:fit-content;
      };
`
export const Content = styled.div`
border-radius:10px;
box-shadow: 0px 0px 1px 0px #888;
border:none;
padding:15px;
width:85%;
height:220px;
background:white;
z-index:2;
display:flex;
align-items:center;
justify-content:space-between;
@media screen and (max-width: 1280px) {
    width:100%;
    flex-direction:column;
  };
`
export const BottomFlex = styled.div`
    display:flex;
    align-items:center;
    flex:1;
    justify-content:center;
    @media screen and (max-width: 1280px) {
        margin-bottom:10px;
        border-bottom:1px solid gray;
      };
`
export const BottomText = styled.p`
    margin-top:5px;
    font-family:${({second})=>second?"Helvetica":"Calibria"};
    font-size:${({second})=>second?"1.4rem":"1.6rem"};
    color:${({second})=>second?"gray":""};
    font-weight:${({second})=>second?"":"700"};
    @media screen and (max-width: 1280px) {
        white-space:${({second})=>second?"":"nowrap"};
      };
`