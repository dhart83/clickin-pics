import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import Lottie from 'lottie-react'

import Navbar from './components/sections/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/sections/Footer'

import Logo from './assets/images/logo.png'
import UC from './assets/lottie/under-construction.json'

const App = () => {
    const brandLogo = {
        link: '/',
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
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
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
