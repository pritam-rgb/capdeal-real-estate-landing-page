import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from  'styled-components/macro';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';

const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    padding:1rem 2rem;
    z-index:100;
    position:fixed;
    width:100%;
    height: 60px;
    // background : red;

`;

const NavLinks= css`
    color:#fff;
    display:flex;
    align-items:center;
    padding:0 1rem;
    height:100%;
    cursor:pointer;
    text-decoration:none;
`
const Logo = styled(Link)`
    ${NavLinks};
    font-style:italic;
`;
const MenuBars = styled(FaBars)`
    display:none;

    @media screen and (max-width: 768px){
        display:block;
        background-image:url(${FaBars});
        background-size:contain;
        height:40px;
        width:40px;
        cursor:pointer;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-50%,25%);
    }
`;
const NavMenu = styled.div`
    display:flex;
    align-items:center;
    margin-right: -48px;

    @media screen and (max-width: 768px){
        display:none;
    }
`;
const NavMenuLinks=styled(Link)`
    ${NavLinks}
`;

const NavBtn=styled.div`
    display:flex;
    align-items:center;
    margin-right:24px;

    @media screen and (max-width: 768px){
        display:none;
    }
`;


const Navbar = ({toggle}) => {
    return (
        <div>
            <Nav>
                <Logo to="/">Capdeal</Logo>
                <MenuBars onClick={toggle}/>
                <NavMenu>
                    {menuData.map((item,index)=>(
                        <NavMenuLinks to={item.link} key={index}>
                            {item.title}
                        </NavMenuLinks>
                    ))}
                </NavMenu>
                <NavBtn>
                    <Button to='/contact' primary='true'>Contact Us</Button>
                </NavBtn>
                
            </Nav>
        
        </div>
    )
}

export default Navbar
