import React, { useState } from 'react'
import { Center, CompanyName, Left, NavIcon, NavText, Right, Select, ShowMenu, Wrapper } from './NavbarStyle'
import {  BiSearch} from 'react-icons/bi';
import {FaUserAlt,FaShoppingCart} from "react-icons/fa"
import NavDrawer from './NavDrawer';
import {FcMenu} from "react-icons/fc"

const Navbar = () => {

    // handling NavDrawer with useState.
    const [Drawer ,setDrawer]= useState(false);


  return (
    <Wrapper>
        <NavDrawer Drawer={Drawer} setDrawer={setDrawer} />
        <Left>
            <div>
                <Select>
                    <option>Shop</option>
                    <option>Sell</option>
                </Select>
            </div>
            <NavText>Bundles</NavText>
            <NavText>Subscription&Save</NavText>
        </Left>
        <Center>
            <CompanyName>GUMMYBOY</CompanyName>
        </Center>
        <Right>
            <div >
                    <Select>
                        <option>Learn</option>
                        <option>Teach</option>
                    </Select>
            </div>
            <NavText>About us</NavText>
            
            <NavIcon><BiSearch  /> </NavIcon>
            <NavIcon><FaUserAlt /> </NavIcon>
            <NavIcon><FaShoppingCart /></NavIcon>
            
        </Right>
        <ShowMenu><FcMenu onClick={()=>setDrawer(!Drawer)} style={{fontSize:"40px"}} /> </ShowMenu>
    </Wrapper>
  )
}

export default Navbar