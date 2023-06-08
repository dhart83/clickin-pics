import React from 'react'
import Lottie from 'lottie-react'
import GlobalStyle from './GlobalStyle'

import UC from './assets/lottie/under-construction.json'

const App = () => {
    return (
        <>
            <GlobalStyle />
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
        </>
    )
}

export default App
