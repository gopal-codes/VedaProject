import styled from "styled-components";

export const Wrapper= styled.div`
    position:relative;
    margin-top:100px;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media screen and (max-width: 1280px) {
        text-align:center;
      };
`
export const Title= styled.p`
    font-size:3rem;
    font-weight:800;
        @media screen and (max-width: 1280px) {
            font-size:2.5rem;
            padding:20px 0;
            text-align:center;
        };
`
export const MainContainer = styled.div`
    padding:50px;
    margin-bottom:100px;
    display:${({displaying})=>displaying?"flex":"none"};
    @keyframes example {
        from {opacity:0;transform:scale(0.5);}
        to {opacity:1;transform:scale(1);}
      };
    animation: example 2s; 
    gap:40px;
    justify-content:space-around;
    @media screen and (max-width: 1280px) {
        flex-wrap:wrap;
      };
`

export const SingleReview = styled.div`
    transform:${({num})=>num?"scale(1.2)":""};
    width:360px;
    display:flex;
    gap:5px;
    flex-direction:column;
    align-items:center;
    @media screen and (max-width: 769px) {
        border-bottom:5px solid yellow;
        transform:scale(1);
    };
`

export const Ratings= styled.div`
    display:flex;
    font-size:30px;
    color:#f9a216;
`
export const Desc = styled.p`
    text-align:center;
    font-size:1.5rem;
    margin-top:25px;
    margin-bottom:25px;
    font-weight:800;
`
export const User = styled.p`
    font-size:1.4rem;
`
export const Verification = styled.div`
    display:flex;
    color:green;
`
export const Circles = styled.div`
      position:absolute;
      display:flex;
      justify-content:center;
      bottom:30px;
`
export const Circle = styled.div`
      width:15px;
      height:15px;
      border-radius:50%;
      outline:3px solid #f9a216;
      background:${({current})=>current?"#f9a216":"white"};
      margin:5px;
`