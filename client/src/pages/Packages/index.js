import React from 'react'
import styled from 'styled-components'

import { Addons, Options, Pricing, Process } from './sections'

const Packages = () => {
    return (
        <main>
            <Options />
            <Addons />
            <Pricing />
            <Process />
        </main>
    )
}

export default Packages
