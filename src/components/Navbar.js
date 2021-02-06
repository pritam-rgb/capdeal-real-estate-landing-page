import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from  'styled-components/macro';
import { menuData } from '../data/MenuData';
import { Button } from './Button';

const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    padding:1rem 2rem;
    z-index:100;
    position:fixed;
    width:100%;
    height: 60px;
    background : red;

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
const MenuBars = styled.i``;
const NavMenu = styled.div`
    display:flex;
    align-items:center;
`;
const NavMenuLinks=styled(Link)`
    ${NavLinks}
`;

const NavBtn=styled.div`
    display:flex;
    align-items:center;
    margin-right:24px;
`


const Navbar = () => {
    return (
        <div>
            <Nav>
                <Logo to="/">Capdeal</Logo>
                <MenuBars />
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
