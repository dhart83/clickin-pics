import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    let date = new Date()
    let year = date.getFullYear()
    return (
        <Styled>
            <div className='copyright-container'>
                <p>
                    &copy; Copyright {year} Donnie Hartman. All Rights Reserved
                </p>
                <p>
                    Website Designed & Developed by{' '}
                    <a className='dev-link' href='/' target='_blank'>
                        Donnie Hartman
                    </a>
                </p>
            </div>
        </Styled>
    )
}

const Styled = styled.footer`
    background-color: #3959ff;
    display: flex;
    justify-content: center;
    margin-top: auto;
    padding: 60px 0 8px 0;

    .copyright-container {
        text-align: center;
    }
    p {
        color: #dddddd;
    }
    a {
        color: white;
        text-decoration: none;
    }
    @media (max-width: 767px) {
        p {
            font-size: 14px;
        }
    }
    @media (max-width: 478px) {
        p {
            font-size: 10px;
        }
    }
`
export default Footer
