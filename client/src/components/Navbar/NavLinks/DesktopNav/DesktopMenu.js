import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const DesktopMenu = ({ toggleMenu, links }) => {
    return (
        <Styled>
            <ul>
                {links.map((link, key) => {
                    return (
                        <NavLink key={key} to={link.route} onClick={toggleMenu}>
                            <li>{link.name}</li>
                        </NavLink>
                    )
                })}
            </ul>
        </Styled>
    )
}

const Styled = styled.div`
    height: 100%;
    ul {
        list-style: none;
        display: flex;
        height: 100%;
    }
    li {
        height: 100%;
    }
    a {
        display: inline-block;
        padding: 1rem;
        text-decoration: none;
        color: black;
        height: 100%;
        transition: all 0.25s ease;
    }
    a:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        background-color: #f3f3f3;
    }
    .active {
        background-color: #f3f3f3;
        border-radius: 3px;
    }
`

export default DesktopMenu
