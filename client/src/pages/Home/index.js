import React from 'react'
import styled from 'styled-components'

import { CTA, Features, Hero, Introduction, Packages } from './sections'

const Home = () => {
    return (
        <main>
            <Hero />
            <Introduction />
            <Features />
            <Packages />
            <CTA />
        </main>
    )
}

export default Home
