import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

#root{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: 100%;
}
`
export default GlobalStyle
