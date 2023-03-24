import Styled from 'styled-components';
import { NavText } from './NavbarStyle';

const DrawerCompo = Styled.div`
padding-right:10px;
border-right:4px solid white;
position:absolute;
top:-60px;
z-index:4;
width:50%;
height:100vh;
background-color:black;
padding-top:100px;
display:none;
transform:${({Drawer})=>Drawer?"translateX(0%)":"translateX(-100%)"};
transition: transform 1s ease;
@media only screen and (max-width: 1280px) {
    display:flex;
    flex-direction:column;
    align-items:center;
}
`
const Text= Styled.p`
    font-size:2rem;
    color:white;
    margin:40px 0px;
`

const NavDrawer = ({Drawer,setDrawer}) => {
     
  return (
   <>
    <DrawerCompo Drawer={Drawer}>
        {["Shop","Subscription & Save","Profile","Contact"].map((val)=>(
            <Text key={val} onClick={()=>setDrawer(false)}>{val}</Text>
        ))}
    </DrawerCompo>
   </>
  )
}

export default NavDrawer