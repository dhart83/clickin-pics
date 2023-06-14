import React from 'react'
import styled from 'styled-components'

import { CompanyStory, MissionAndValues, Team } from './sections'

const About = () => {
    return (
        <main>
            <CompanyStory />
            <MissionAndValues />
            <Team />
        </main>
    )
}

export default About
