import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const Navigation = styled.ul`
font-size: 1.5em;
list-style-type: none;
margin: auto;
overflow: hidden;
display: flex;
justify-content: space-evenly;
background-color: #05445E;
width: device-width;
`

const ElementOfNav = styled.li`
float: left;
display: block;
text-align: center;
border-right: 1.5px solid #D4F1F4;
padding: .2em;
width: 100%:
`

const Wrapper = styled.div`
&:hover ${ElementOfNav} {
    background-color: #A8E6DA;
}
`

const NavBar = () => {
    return(
        <Navigation>
            <Wrapper>
                <ElementOfNav>
                    <Link to="/portfolio">Home</Link>
                </ElementOfNav>
            </Wrapper>
            <Wrapper>
                <ElementOfNav>
                    <Link to="/skills">Skillset</Link>
                </ElementOfNav>
            </Wrapper>
            <Wrapper>
                <ElementOfNav>
                    <Link to="/projects">Projects</Link>
                </ElementOfNav>
            </Wrapper>
            <Wrapper>
                <ElementOfNav>
                    <Link to="/contact">Contact</Link>
                </ElementOfNav>
            </Wrapper>
        </Navigation>
    )
}

export default NavBar