import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
    --color-primary: #3959ff;
    --color-secondary: #ca1aa4;
    --color-h: #383838;
    --color-p: #a8a8a8;
    --link-color: hsl(0, 0%, 47%);
}

::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    font-family: 'Nunito', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto', sans-serif;
}

#root{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: 100%;
}

h1 {
    margin-top: 2rem;
    font-size: 48px;
    font-weight: lighter;
    color: var(--color-h);
}

p {
    font-size: 18px;
    color: var(--color-p);
}

span {
    color: var(--color-primary);
    font-weight: bolder;
}

a {
    cursor: pointer;
}
.container {
    padding: 90px 0 90px 0;
    max-width: 1200px;
    margin-inline: auto;
}
`
export default GlobalStyle
