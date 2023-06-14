import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'

import { config } from './constants'
import { Navbar, Footer } from './components'
import { Home, About, Packages, Gallery, Contact } from './pages'

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Navbar brand={config.assets.brandLogo} links={config.links} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/packages' element={<Packages />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
