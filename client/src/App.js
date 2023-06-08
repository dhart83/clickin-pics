import React from 'react'
import GlobalStyle from './GlobalStyle'
import Lottie from 'lottie-react'

import Navbar from './components/sections/Navbar'
import Footer from './components/sections/Footer'

import Logo from './assets/images/logo.png'
import UC from './assets/lottie/under-construction.json'

const App = () => {
    const brandLogo = {
        link: 'https://www.linkedin.com/in/donniehartman',
        img: Logo,
        alt: 'Brand Logo'
    }

    const mainLinks = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Services',
            link: '/services'
        },
        {
            name: 'Contact',
            link: '/contact'
        }
    ]

    return (
        <>
            <GlobalStyle />
            <Navbar brand={brandLogo} links={mainLinks} />
            <Lottie
                style={{
                    height: 'auto',
                    width: '100%',
                    maxWidth: 700,
                    paddingTop: 90,
                    alignSelf: 'center'
                }}
                animationData={UC}
                loop={true}
            />
            <Footer />
        </>
    )
}

export default App
